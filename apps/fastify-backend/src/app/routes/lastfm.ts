import { FastifyInstance } from 'fastify';
import { getLastFMTopTrackController } from '../controllers/lastfm';

export default async function (fastify: FastifyInstance) {
  fastify.get('/lastfm/toptrack', getLastFMTopTrackController);
}