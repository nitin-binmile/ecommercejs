const jsonServer = require('json-server')
const db= require('./db.js')

jsonServer
const server = jsonServer.create()
const router = jsonServer.router(db());
const middleware = jsonServer.defaults();

server.use(middleware)

server.use(router)

server.listen(3000,()=>console.log("server is running"))