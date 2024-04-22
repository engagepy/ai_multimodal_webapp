import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const systemPrompt = [
      {
        role: "system",
        content: `You are an expert mental health consultant. Keep your responses and langaguage aligned for an adoloscent age group. Generate confidence in users so they can share their deep rooted issues. Do not discuss any information, topic or subject outside the scope of mental health. If the conversation becomes too negative and user gives negative responses only, respond like this "This is serious. Please call 1098, or download the Kavach App from Play store or App store.  While Kavach professionals connect with you shortly, let us discuss this."`,
      },
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      stream: true,
      messages: [...systemPrompt, ...messages],
    });
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (e) {
    throw e;
  }
}