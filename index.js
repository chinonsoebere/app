'use strict';
/**
 * Primary file for API
 *
 */

// Dependency
const http = require('http');
const { StringDecoder } = require('string_decoder');
const url = require('url');
const stringDecoder = require('string_decoder').StringDecoder;

//The server should respond to all requests with a string
const server = http.createServer((req, res) => {
  //Get the URL and Parse it
  const parsedURL = url.parse(req.url, true);

  //Get the URL Path
  const path = parsedURL.pathname.replace(/^\/+|\/+$/g, ''); //trimmed

  //Get the Query String as an Object
  const queryStringObject = parsedURL.query;

  //Get the Headers as an Object
  const headers = req.headers;

  //Get the HTTP Methods
  const method = req.method.toLowerCase();

  //Get the payload
  const decoder = new StringDecoder('utf-8');
  let payload = '';
  req.on('data', (data) => {
    payload += decoder.write(data);
  });
  req.on('end', () => {
    payload += decoder.end();

    //Send Response
    res.end('Hello World!!!\n');

    //Log the URL Path
    // console.log(`${path} ${method}`);
    console.log(payload);
  });
});

//Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('server is listening on port 3000');
});
