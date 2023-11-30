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

const history: ChatCompletionMessageParam[] = [
  { role: 'system', content: 'You are a helpful assistant designed to output JSON' },
  { role: 'system', content: 'if the user asks for an image without context, ask for it' },
  { role: 'system', content: 'if the user gives you image context, add the context to the JSON using the field "image_context"' },
  // { role: 'system', content: 'when a user asks for an image, answer in json format' },
  // { role: 'system', content: 'quando un utente ti specifica che immagine vuole, rispondi esattamente "IMMAGINE"' },
  // { role: 'system', content: 'quando un utente ti chiede di generare un\'immagine, rispondi esattamente "IMMAGINE"' }
];
const openai = new OpenAI();

export default fastifyPlugin(async function (fastify: FastifyInstance) {

  const sendMessage = async (userMessage: string): Promise<string> => {
    history.push({ role: 'user', content: userMessage });

    const completion = await openai.chat.completions.create({
      messages: history,
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" }
    });


    const responseFromAssist = completion.choices[0].message;

    let jsonResponse;

    try {
      jsonResponse = JSON.parse(responseFromAssist.content);
    } catch (error) {
      return 'error';
    }

    if (!jsonResponse) {
      return 'error';
    }

    if (jsonResponse['image_context']) {
      history.push({ role: 'assistant', content: 'Sto generando un\'immagine' });
      const imageUrl = await getImage(jsonResponse['image_context']);
      // TODO: model better the image response
      return imageUrl;
    }
    
    history.push(responseFromAssist);   
    console.log(responseFromAssist);
    

    // TODO: check consistency of this response ('message' or 'response')
    return jsonResponse['response'];
  };

  const getImage = async (prompt: string) => {
    const completion = await openai.images.generate({ model: "dall-e-2", prompt, size: "256x256" });

    const imageUrl = completion.data[0].url;
    return imageUrl;
  }

  const decoration: FastifyOpenAi = { client: openai, sendMessage };
  fastify.decorate('openai', decoration);

});