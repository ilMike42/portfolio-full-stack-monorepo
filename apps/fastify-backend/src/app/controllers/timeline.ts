import { FastifyRequest } from "fastify";

const getTimelineController = async (req: FastifyRequest) => {

  // TODO: refactor this into a MongoDB view


  const workplacesCollection = req.server.mongo.db.collection('Workplaces');
  const educationCollection = req.server.mongo.db.collection('Education');
  const personalExperiencesCollection = req.server.mongo.db.collection('PersonalExperiences');

  const workplaces = await workplacesCollection.find().sort('year', -1).toArray();
  const education = await educationCollection.find().sort('year', -1).toArray();
  const personalExperiences = await personalExperiencesCollection.find().sort('year', -1).toArray();
  return [
    {
      title: "Experiences",
      subSections: [
        {
          tags: ['Workplace','Softfobia'],
          items: workplaces
        },
        {
          tags: ['Personal', 'Hobbies'],
          items: personalExperiences
        }
      ],

    },
    {
      title: "Education",
      subSections: [
        {
          tags: [],
          items: education
        }
      ]
    },
  ];
}

export { getTimelineController }