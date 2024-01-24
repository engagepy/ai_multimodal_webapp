import OpenAI from 'openai';
import {OpenAIStream, StreamingTextResponse} from 'ai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const {messages, llm} = await req.json();

    const ragPrompt = [
      {
        role: 'system',
        content: `You are an expert mental health consultant. Always give advice on how to deal with diverse mental health issues. Intelligently enquring about their problems and providing them with the best possible solution. Keep your responses and langaguage aligned for a adoloscent age group. Generate confidence in users so they can share their deep rooted issues. Do not discuss any information, topic or subject that is not related to mental health.`,
      },
    ]


    const response = await openai.chat.completions.create(
      {
        model: llm ?? 'gpt-4',
        stream: true,
        messages: [...ragPrompt, ...messages],
      }
    );
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (e) {
    throw e;
  }
}
