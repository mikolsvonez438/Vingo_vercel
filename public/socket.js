import { app, server } from '../server.js';

export default function SocketHandler(req, res) {
  if (!res.socket.server.io) {
    console.log('Socket is initializing');
    res.socket.server.io = server;
  }
  res.end();
}
