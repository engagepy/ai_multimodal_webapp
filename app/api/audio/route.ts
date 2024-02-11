import OpenAI from "openai";
import fs from "fs";
import { OpenAIStream, StreamingTextResponse, streamToResponse } from "ai";
import path from "path";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const speechResponse = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: messages.pop().content,
    });

    const buffer = Buffer.from(await speechResponse.arrayBuffer());

    return new Response(buffer, {
      headers: {
        "content-type": "audio/mpeg",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (e) {
    throw e;
  }
}
