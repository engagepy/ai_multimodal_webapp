# RAGBot Starter

This project is a starter for creating a chatbot using Astra DB and OpenAI. It's designed to be easy to deploy and use, with a focus on performance and usability.

## Features

- **Astra DB Integration**: Store and retrieve data from your Astra DB database with ease.
- **OpenAI Integration**: Leverage the power of OpenAI to generate intelligent responses.
- **Easy Deployment**: Deploy your chatbot to Vercel with just a few clicks.
- **Customizable**: Modify and extend the chatbot to suit your needs.

## Getting Started

### Prerequisites

- An Astra DB account. You can [create one here](https://astra.datastax.com/register).
  - An Astra Vector Database
- An OpenAI account. You can [create one here](https://platform.openai.com/).

### Setup

1. Clone this repository to your local machine.
2. Install the dependencies by running `npm install` in your terminal.
3. Set up the following environment variables in your IDE or `.env` file:
   - `OPENAI_API_KEY`: Your API key for OpenAI

### Running the Project

To start the development server, run `npm run dev` in your terminal. Open [http://localhost:3000](http://localhost:3000) to view the chatbot in your browser.

## Deployment

You can easily deploy your chatbot to Vercel by clicking the button below:

Remember to set your environment variables to the values obtained when setting up your Astra DB and OpenAI accounts.

Note: Before you deploying to prod, you will want to remove seed script (`npm run seed`) from the build step.
