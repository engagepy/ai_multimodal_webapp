import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse, streamToResponse } from "ai";
import { NextRequest, NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const file: File | null = data.get("wavfile") as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false });
    }

    console.log("Audio data:", file);

    const speechResponse = await openai.audio.transcriptions.create({
      file: file,
      model: "whisper-1",
      response_format: "text",
    });

    console.log("Speech response:", speechResponse);

    return NextResponse.json({ success: true, transcription: speechResponse });
  } catch (e) {
    throw e;
  }
}
