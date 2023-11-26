import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/new', async function () {
    return { message: 'Hello API - new' };
  });
}
