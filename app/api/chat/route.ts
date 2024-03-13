import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages, threadId } = await req.json();


    console.log("thread " + threadId);

    const assistant = await openai.beta.assistants.update(
      process.env.OPENAI_ASSISTANT_ID,
      {
        
      }
    );

    let thread;
    let newThread = false;

    if (threadId) {
      thread = await openai.beta.threads.retrieve(threadId);
    } else {
      thread = await openai.beta.threads.create();
      newThread = true;
    }

    console.log(messages[messages.length - 1].role);

    // console.log(messages.pop() + " messages");

    const message = await openai.beta.threads.messages.create(thread.id, {
      role: messages[messages.length - 1].role,
      content: messages[messages.length - 1].content,
    });

    console.log(message);

    let run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistant.id,
    });

    while (run.status === "in_progress" || run.status === "queued") {
      await new Promise((resolve) => setTimeout(resolve, 500));
      run = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    }

    const messages1 = await openai.beta.threads.messages.list(thread.id);

    console.log(messages1.data);

    let responseContent = "";
    if (messages1.data[0].content[0]?.type === "text") {
      responseContent = messages1.data[0].content[0]?.text.value;
    }

    console.log(responseContent);

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
    throw e;
  }
}
