const http = require('http')// this loads core http module and stores it in http variable

//require() is a globally accessible fucniton in Node.js and is always available.

const port = process.env.PORT || 9000

const server = http.createServer(
  function (req, res) {
    if (req.url === '/') {
      return respondText(req, res)
    }
    if (req.url === '/json') {
      return respondJSON(req, res);
    }
    else {
      return respondNotFound(req, res);
    }
  }
);

function respondText(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello!!!');
}

function respondJSON(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ text: 'hello', nos: [1, 23, 34, 2] }));
}

function respondNotFound(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
}

server.listen(port);
console.log(`server listening on port ${port}`);