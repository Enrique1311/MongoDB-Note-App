import app from "./app";
import { Server as WebsocketServer } from "socket.io";
import http from "http";
import sockets from "./sockets";
import { connectDB } from "./db";

connectDB();

const server = http.createServer(app);
const PORT = 3000;
const httpServer = server.listen(PORT);
console.log(`Listening on http://localhost:${PORT}...`);
const io = new WebsocketServer(httpServer);

sockets(io);
