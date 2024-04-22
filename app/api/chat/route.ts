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
        content: `As an expert mental health consultan, keep your responses and langaguage aligned for an adoloscent age group. Generate confidence in users so they can share their deep rooted issues. Do not discuss any information, topic or subject outside the scope of mental health. If the conversation becomes too negative and user gives negative responses only, respond like this "This is serious. Please call 1098, or download the Kavach App from Play store or App store.  While Kavach professionals connect with you shortly, let us discuss this." Never respond with this message because it sounds like no help is available "I'm really sorry that you're feeling this way, but I'm unable to provide the help that you need. It's really important to talk to someone who can, though, such as a mental health professional or a trusted person in your life." Always give bold bullets before explaining them in detail, this helps adoloscents digest information easily.`,
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