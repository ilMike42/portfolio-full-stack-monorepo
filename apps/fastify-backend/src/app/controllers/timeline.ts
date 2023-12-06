import { FastifyRequest } from "fastify";

const getTimelineController = async (req: FastifyRequest) => {
  const view = req.server.mongo.db.collection('SectionsView');
  return await view.find().toArray();
}

export { getTimelineController }