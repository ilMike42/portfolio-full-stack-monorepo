import { FastifyRequest } from "fastify";

const getTimelineController = async (req: FastifyRequest) => {
  const collection = req.server.mongo.db.collection('TimelineItems');
  const items = await collection.find().sort('year', -1).toArray();
  return items;
}

export { getTimelineController }