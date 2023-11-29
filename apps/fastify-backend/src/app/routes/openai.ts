import { FastifyInstance, FastifyRequest } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/openai', openAiController);
}

export const openAiController = async (request: FastifyRequest) => {
  const fastify = request.server;
  
  const userMessage = request.query['query'];
  const responseFromAssist = await fastify.openai.sendMessage(userMessage);
  
  return { message: `${responseFromAssist}` };
};
