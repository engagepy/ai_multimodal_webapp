import OpenAI from 'openai';
import {OpenAIStream, StreamingTextResponse} from 'ai';
// import {AstraDB} from "@datastax/astra-db-ts";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// const astraDb = new AstraDB(process.env.ASTRA_DB_APPLICATION_TOKEN, process.env.ASTRA_DB_ID, process.env.ASTRA_DB_REGION, process.env.ASTRA_DB_NAMESPACE);

export async function POST(req: Request) {
  try {
    const {messages, useRag, llm, similarityMetric} = await req.json();

    const latestMessage = messages[messages?.length - 1]?.content;

    // let docContext = '';
    // if (useRag) {
    //   const {data} = await openai.embeddings.create({input: latestMessage, model: 'text-embedding-ada-002'});

    //   const collection = await astraDb.collection(`chat_${similarityMetric}`);

    //   const cursor= collection.find(null, {
    //     sort: {
    //       $vector: data[0]?.embedding,
    //     },
    //     limit: 5,
    //   });
      
    //   const documents = await cursor.toArray();
      
    //   docContext = `
    //     START CONTEXT
    //     ${documents?.map(doc => doc.content).join("\n")}
    //     END CONTEXT
    //   `
    // }
    const ragPrompt = [
      {
        role: 'system',
        content: `You are an expert mental health consultant. Giving practical advice to adoloscents on how to deal with stress and anxiety. Intelligently enqurinng about their problems and providing them with the best possible solution. 
        Always answer with best possible postiving yet pragmatic answer. Keep the langaguage always aligned for a adoloscent age group. Keep them motivated, and confident to share more and solve their deep rooted issues. Do not discuss any information, topic or subject that is not related to mental health.`,
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
