# Production Ready AI Assistant Starter

This project is a starter for creating a multimodal chatbot enabled with OpenAI and Clerk. It includes the following features:

multilingual ✅
voice-to-text ✅
text-to-voice ✅
secure-login ✅
anonymous ✅

 It's designed to be easy to deploy and use, with a focus on performance and usability.

## Features

- **OpenAI Integration Chat/Assistant API**: Leverage the power of OpenAI to generate intelligent responses.
- **Clerk Integration User Management**: Leverage the power of OpenAI to generate intelligent responses.
- **Easy Deployment**: Deploy your chatbot to Vercel with just a few clicks.
- **Customizable**: Modify and extend the chatbot to suit your needs.

## Getting Started

### Prerequisites

- A Clerk Free Account. You can [create one here](https://clerk.com).
  - An Astra Vector Database
- An OpenAI account. You can [create one here](https://platform.openai.com/).

### Setup

1. Clone this repository to your local machine.
2. Install the dependencies by running `npm install` in your terminal.
3. Set up the following four environment variables in your IDE or `.env` file:

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
