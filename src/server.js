/* eslint-disable no-console */
import { createServer } from 'node:http';
import { app } from './app.js';

const port = 5554;
const server = createServer(app);
server.listen(port, () => console.log(`started at ${port}`));

process.on('SIGTERM', () => {
  console.log('SIGTERM server is closing');
  server.close();
});
process.on('SIGINT', () => {
  console.log('\nSIGINT signal received');
  server.close();
});

server.on('close', (err) => {
  if (err) {
    console.error('SERVER CLOSE ERROR: ', err);
  }
  console.log('The server is closed, no longer accepting connections.');
});
