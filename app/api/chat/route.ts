import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export const maxDuration = 300;
export const runtime = 'nodejs';

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class CircuitBreaker {
  func: any;
  threshold: number;
  cooldown: number;
  failures: number;
  lastTime: number;
  constructor(func, threshold = 3, cooldown = 10000) {
    this.func = func;
    this.threshold = threshold;
    this.cooldown = cooldown;
    this.failures = 0;
    this.lastTime = Date.now();
  }

  async call(...args) {
    if (this.failures >= this.threshold && Date.now() < this.lastTime + this.cooldown) {
      throw new Error('Circuit is open');
    }
    try {
      const result = await this.func(...args);
      this.failures = 0; // Reset on success
      return result;
    } catch (error) {
      this.failures++;
      this.lastTime = Date.now();
      if (this.failures >= this.threshold) {
        setTimeout(() => this.failures = 0, this.cooldown); // Reset failures count after cooldown
      }
      throw error;
    }
  }
}

async function retryOperation(operation, retries = 5, delayLength = 500) {
  let lastError = null;
  for (let i = 0; i < retries; i++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (i < retries - 1) {
        await delay(delayLength);
        delayLength *= 2; // Exponential backoff
      }
    }
  }
  throw lastError;
}

const createThread = async (threadId) => {
  if (threadId) {
    return openai.beta.threads.retrieve(threadId);
  } else {
    return openai.beta.threads.create();
  }
};

export async function POST(req) {
  const circuitBreaker = new CircuitBreaker(retryOperation);
  try {
    const { messages, threadId } = await req.json();

    let thread = await circuitBreaker.call(() => createThread(threadId));
    const newThread = !threadId;

    const lastMessage = messages[messages.length - 1];
    const message = await circuitBreaker.call(() => openai.beta.threads.messages.create(thread.id, {
      role: lastMessage.role,
      content: lastMessage.content,
    }));

    const assistant = await circuitBreaker.call(() => openai.beta.assistants.update(process.env.OPENAI_ASSISTANT_ID, {}));
    let run = await circuitBreaker.call(() => openai.beta.threads.runs.createAndPoll(thread.id, {
      assistant_id: assistant.id,
    }));

    while (run.status === "in_progress" || run.status === "queued") {
      // await delay(500);
      run = await circuitBreaker.call(() => openai.beta.threads.runs.retrieve(thread.id, run.id));
    }

    const messagesResult = await circuitBreaker.call(() => openai.beta.threads.messages.list(thread.id));
    const responseContent = messagesResult.data[0].content[0]?.text?.value || "";

    return new NextResponse(JSON.stringify({
      content: responseContent,
      data: {
        threadId: thread.id,
        newThread: newThread,
      },
    }));
  } catch (error) {
    console.error('Error:', error.message);
    return new NextResponse(JSON.stringify({ error: "Failed to process request" }), { status: 500 });
  }
}
