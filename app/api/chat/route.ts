import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function retryOperation(operation, retries = 5, delayLength = 500) {
  let lastError = null;
  for (let i = 0; i < retries; i++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      await delay(delayLength);
      delayLength *= 2; // Exponential backoff
    }
  }
  throw lastError;
}

export async function POST(req) {
  try {
    const { messages, threadId } = await req.json();
    console.log("Thread " + threadId);

    let thread, newThread = false;

    if (threadId) {
      thread = await retryOperation(() => openai.beta.threads.retrieve(threadId));
    } else {
      thread = await retryOperation(() => openai.beta.threads.create());
      newThread = true;
    }

    const messagePayload = {
      role: messages[messages.length - 1].role,
      content: messages[messages.length - 1].content,
    };

    const message = await retryOperation(() => openai.beta.threads.messages.create(thread.id, messagePayload));
    console.log(message);

    const assistant = await retryOperation(() => openai.beta.assistants.update(process.env.OPENAI_ASSISTANT_ID, {}));
    
    let run = await retryOperation(() => openai.beta.threads.runs.createAndPoll(thread.id, {
      assistant_id: assistant.id,
    }));

    while (run.status === "in_progress" || run.status === "queued") {
      await delay(500);
      run = await retryOperation(() => openai.beta.threads.runs.retrieve(thread.id, run.id));
    }

    const messagesResult = await retryOperation(() => openai.beta.threads.messages.list(thread.id));
    console.log(messagesResult.data);

    let responseContent = "";
    if (messagesResult.data[0].content[0]?.type === "text") {
      responseContent = messagesResult.data[0].content[0]?.text.value;
    }

    return new NextResponse(
      JSON.stringify({
        content: responseContent,
        data: {
          threadId: thread.id,
          newThread: newThread,
        },
      })
    );
  } catch (e) {
    console.error(e);
    return new NextResponse(
      JSON.stringify({ error: "Failed to process request" }),
      { status: 500 }
    );
  }
}
