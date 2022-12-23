'use strict';
/**
 * Primary file for API
 *
 */

// Dependency
const http = require('http');
const url = require('url');

//The server should respond to all requests with a string
const server = http.createServer((req, res) => {
  //Get the URL and Parse it
  const parsedURL = url.parse(req.url, true);

  //Get the URL Path
  const path = parsedURL.pathname.replace(/^\/+|\/+$/g, ''); //trimmed

  //Get the HTTP Methods
  const method = req.method.toLowerCase();

  //Send Response
  res.end('Hello World!!!\n');

  //Log the URL Path
  console.log(path, method);
});

//Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('server is listening on port 3000');
});
