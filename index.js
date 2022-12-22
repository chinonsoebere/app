'use strict';
/**
 * Primary file for API
 *
 */

// Dependency
const http = require('http');

//The server should respond to all requests with a string
const server = http.createServer((req, res) => {
  res.end('Hello World!!!');
});

//Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('server is listening on port 3000');
});
