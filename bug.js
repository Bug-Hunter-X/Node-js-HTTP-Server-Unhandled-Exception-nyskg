const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//The problem is that this will crash your program in Node.js because of an unhandled exception.
//You can see that we haven't put any error handling.
//This makes it difficult for the program to run well.
//So we should use error handling.