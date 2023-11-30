import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/timeline', async function () {
    //TODO: connect mongo
    return [
      {
        year: '2018',
        title: 'Softfobia',
        description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer.
        It played a pivotal role in establishing desktop publishing as a general office function.
        The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle;
        it came with a keyboard and single-button mouse.`
      },
      {
        year: '1994',
        title: 'Nascita',
        description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer.
        It played a pivotal role in establishing desktop publishing as a general office function.
        The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle;
        it came with a keyboard and single-button mouse.`
      },
    ];
  });
}