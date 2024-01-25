import OpenAI from 'openai';
import fs from "fs";
import {OpenAIStream, StreamingTextResponse} from 'ai';
import path from "path";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const {messages} = await req.json();

    const systemPrompt = [
      {
        role: 'system',
        content: `You are an expert mental health consultant. Give advice on how to deal with diverse mental health issues. Keep your responses and langaguage aligned for a adoloscent age group. Generate confidence in users so they can share their deep rooted issues. Do not discuss any information, topic or subject outside the scope of mental health. If the conversation becomes too negative and user gives negative responses only, respond like this "This is serious. While Kavach professionals connect with you shortly, let us discuss this for a while. Certainly there is a positive solution we can come up with together. Trust me!"`,
      }
    ]

    const response = await openai.chat.completions.create(
      {
        model: 'gpt-4',
        stream: false,
        messages: [...systemPrompt, ...messages],
      }
    );
     // Extract the text response
     const textResponse = response.choices[0].message.content;

     // Convert the text response to speech
     const speechResponse = await openai.audio.speech.create({
       model: "tts-1",
       voice: "alloy",
       input: textResponse,
     });
 
     // Write the speech file
     const speechFile = path.resolve("./speech.mp3");
     const buffer = Buffer.from(await speechResponse.arrayBuffer());
     await fs.promises.writeFile(speechFile, buffer);
     
    
    return new Response(JSON.stringify({textResponse, speechResponse}), {
        headers: {
            "content-type": "application/json",
        },
        });
    
  } catch (e) {
    throw e;
  }
}
