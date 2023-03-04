import { fastifyConnectPlugin } from "@bufbuild/connect-fastify";
import { fastify } from "fastify";
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'

import routes from './connect'

const server = fastify()

await server.register(helmet, {
  crossOriginOpenerPolicy: false,
  crossOriginResourcePolicy: false
})

await server.register(cors, {
  origin: '*',
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'x-grpc-web',
    'x-user-agent',
    'Connect-Protocol-Version'
  ],
  credentials: true,
  maxAge: 86400
})

await server.register(fastifyConnectPlugin, {
  routes
})

server.post('/', (_, reply) => {
  reply.send({ message: 'Hello world!' })
})
server.get("/", (_, reply) => {
  reply.type('text/plain').send('Hello world!')
})

await server.listen({ host: 'localhost', port: 8080 })
console.log("server is listening at", server.addresses())
