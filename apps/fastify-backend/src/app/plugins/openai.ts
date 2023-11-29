import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat";

import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin'

export interface FastifyOpenAi {
  client: OpenAI,
  sendMessage: (userMessage: string) => Promise<string>;
}


declare module 'fastify' {
  interface FastifyInstance {
    openai: FastifyOpenAi
  }
}

const history: ChatCompletionMessageParam[] = [];
const openai = new OpenAI();

export default fastifyPlugin(async function (fastify: FastifyInstance) {

  const sendMessage = async (userMessage: string): Promise<string> => {
    history.push({ role: 'user', content: userMessage });

    const completion = await openai.chat.completions.create({
      messages: history,
      model: "gpt-3.5-turbo",
    });

    const responseFromAssist = completion.choices[0].message;
    history.push(responseFromAssist);
    

    return responseFromAssist.content;
  };

  const decoration: FastifyOpenAi = { client: openai, sendMessage };
  fastify.decorate('openai', decoration);

});