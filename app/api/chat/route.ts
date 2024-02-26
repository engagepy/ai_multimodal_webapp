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
        content: `You are an expert mental health consultant. Keep your responses and langaguage aligned for an adoloscent age group. Generate confidence in users so they can share their deep rooted issues. Do not discuss any information, topic or subject outside the scope of mental health. If the conversation becomes too negative and user gives negative responses only, respond like this "This is serious. While Kavach professionals connect with you shortly, let us discuss this."`,
      },
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      stream: true,
      messages: [...systemPrompt, ...messages],
    });

    // console.log(messages);

    // const assistant = await openai.beta.assistants.create({
    //   model: "gpt-4",
    //   instructions: systemPrompt[0].content,
    // });

    // const thread = await openai.beta.threads.create();

    // const message = await openai.beta.threads.messages.create(thread.id, {
    //   role: messages[0].role,
    //   content: messages[0].content,
    // });

    // console.log(message);

    // let run = await openai.beta.threads.runs.create(thread.id, {
    //   assistant_id: assistant.id,
    // });

    // while (run.status === "in_progress" || run.status === "queued") {
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    //   run = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    // }

    // console.log(run);

    // const messages1 = await openai.beta.threads.messages.list(thread.id);

    // console.log(messages1.data);

    // return new Response(
    //   JSON.stringify(messages1.data[0].content[0].text.value),
    //   {
    //     headers: { "content-type": "application/json" },
    //   }
    // );

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (e) {
    throw e;
  }
}
