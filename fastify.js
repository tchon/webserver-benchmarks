const fastify = require("fastify")();
const text = require("./lorem-ipsum");

const handler = (request, reply) => {
  reply.send(text);
};

fastify.get("/", handler);
fastify.get("/test", handler);


const port = process.env.PORT || 5002;

fastify.listen(port, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
});
