# AI Web App with Next.js, OpenAI, and Clerk

## Serve your AI solutions to the world in minutes, with a production-ready Next.js template. 

### Secure user management and AI models served via OpenAI APIs and Clerk integration.

Link to open source: https://github.com/engagepy/assistant_ai_chat_rag 

Link to Live Project: https://ai.astratechz.com  

Each deployment can be backed by native data using `client.beta.vector_stores.create` API by OpenAI. 

This project aims to serve as a template for you to work on building/connecting a model, fine-tuning or enabling RAG by simply uploading files in OpenAI assistant playground and serving your AI solution to the world in minutes. 

Follow the instructions and you should have the project live responding to your use case in no time. Yes familiarity quotient with nextjs, vercel, clerk and openai can make it relatively faster or slower to deploy. But the process overall aims to remain a breeze. Write in if you're stuck somewhere. Website link is at the end.  

Feature Highlights:

- multilingual ✅
- voice-to-text ✅
- text-to-voice ✅
- secure-login ✅
- anonymous ✅

Models Used:

- 𝌭 tts - text to speech
- 𝌭 whisper - speech to text
- 𝌭 gpt-4-turbo - chat completions

It's designed to be easy to deploy and use, with a focus on performance and usability.

## Features

- **OpenAI Integration Chat/Assistant API**: Leverage the power of OpenAI to generate intelligent responses.
- **Clerk Integration User Management**: Providing secure wholistic user management.
- **Easy Deployment**: Deploy your chatbot to Vercel with just a few clicks.
- **Customizable**: Modify and extend the chatbot to suit your needs.

## Getting Started

### Prerequisites

- A Clerk Free Account. You can [create one here](https://clerk.com).
- An OpenAI account. You can [create one here](https://platform.openai.com/).

### Setup

1. Clone this repository to your local machine.
2. Install the dependencies by running `npm install` in your terminal.
3. Replace these four environment variables in your IDE or `.env` file. Keep the rest as defined in `.env.example`:

   - OPENAI_API_KEY=REPLACE_ME
   - OPENAI_ASSISTANT_ID=REPLACE_ME if using OpenAI Assistant API 
   - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=REPLACE_ME
   - CLERK_SECRET_KEY=REPLACE_ME

4. Replace the system content with your own prompts to navigate the chatbot towards desired responses: Look for the following code block in file `app/api/chat/route.ts`

```javascript
{
        role: "system",
        content: `<Your Prompt Goes Here>`,
      },
```

### Running the Project

To start the development server, run `npm run dev` in your terminal. Open [http://localhost:3000](http://localhost:3000) to view the chatbot in your browser.

## Deployment

You can easily deploy your chatbot to Vercel by clicking the button below:

Remember to set your environment variables to the values obtained when setting up your Clerk and OpenAI accounts.

Note: Write into https://astratechz.com for any support. We are happy to help you and get help from you to improve this project.
