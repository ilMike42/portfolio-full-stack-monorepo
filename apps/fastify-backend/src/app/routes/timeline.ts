import { FastifyInstance } from 'fastify';
import { getTimelineController } from '../controllers/timeline';

export default async function (fastify: FastifyInstance) {
  fastify.get('/timeline', getTimelineController);
}