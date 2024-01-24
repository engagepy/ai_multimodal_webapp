import OpenAI from 'openai';
import {OpenAIStream, StreamingTextResponse} from 'ai';

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
        stream: true,
        messages: [...systemPrompt, ...messages],
      }
    );
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (e) {
    throw e;
  }
}
