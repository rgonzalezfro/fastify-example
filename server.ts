import Fastify, { FastifyInstance, RouteShorthandOptions }  from "fastify";
import routes from './routes/home';

const server: FastifyInstance = Fastify();

server.register(routes);

const start = async () => {
  try {
    await server.listen(3000)

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

    console.log(`server listening on ${port}`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
start()
