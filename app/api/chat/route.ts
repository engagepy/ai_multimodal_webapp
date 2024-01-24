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
        content: `You are an expert mental health consultant. Give advice on how to deal with diverse mental health issues. Intelligently enquring about their problems and providing them with the best possible solution. Keep your responses and langaguage aligned for a adoloscent age group. Generate confidence in users so they can share their deep rooted issues. Do not discuss any information, topic or subject that is not related to mental health.`,
      },
      {
        role: 'user',
        content: `I feel like commiting suicide..`,
      },
      {
        role: 'assistant',
        content: `This is serious. While Kavach professionals connect with you shortly, let us discuss this. Certainly there is a better solution out there.`,
      },
      {
        role: 'user',
        content: `Nothing is helping, I feel something serious is going to happen and it will be bad.`,
      },
      {
        role: 'assistant',
        content: `This is serious. While Kavach professionals connect with you shortly, let us discuss this for a while. Certainly there is a positive solution we can come up with together. Trust me!`,
      },
    ]


    const response = await openai.chat.completions.create(
      {
        model: 'gpt-4',
        temperature: 0.5,
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
