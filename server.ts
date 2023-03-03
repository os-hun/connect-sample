import { fastifyConnectPlugin } from "@bufbuild/connect-fastify";
import { fastify } from "fastify";
import routes from "./connect";

const server = fastify()

await server.register(fastifyConnectPlugin, {
  routes
})

server.get("/", (_, reply) => {
  reply.type('text/plain').send('Hello world!')
})

await server.listen({ host: 'localhost', port: 8080 })
console.log("server is listening at", server.addresses())
