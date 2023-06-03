/* eslint-disable require-jsdoc */
/* eslint-disable no-console */
import { createServer } from 'node:http';
import { app } from './app.js';

const port = 5555;
const server = createServer(app);
server.listen(port, () => {});

const gracefulShutdown = (server) => (signal) => {
  console.log(`${signal} received`);
  server.close();
};

const handleExit = gracefulShutdown(server);

process.on('SIGTERM', () => handleExit('SIGTERM'));
process.on('SIGINT', () => handleExit('SIGINT'));

server.on('listening', () => {
  console.log(
    `Server initialized at port: "${port}" in "${process.env.NODE_ENV} mode" and is ready to accept connections`
  );
});

server.on('close', (err) => {
  if (err) {
    console.error('server close ERROR: ', err);
  }
  console.log('Server is closing, no longer accepting connections.');
});
