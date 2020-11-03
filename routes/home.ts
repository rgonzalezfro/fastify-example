import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

const routes = async (fastify: FastifyInstance) => {
    fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
        reply.send("The RAMP UP is working!")
    })
    fastify.post('/', async (request: FastifyRequest<any>, reply: FastifyReply) => {
        const { number } = request.body
        reply.send(`The value received is: ${number}`)
    })
}

export default routes;