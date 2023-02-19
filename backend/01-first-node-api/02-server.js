const http = require('http')// this loads core http module and stores it in http variable

//require() is a globally accessible fucniton in Node.js and is always available.

const port = process.env.PORT || 9000

const server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ text: 'hello', nos: [1, 23, 34, 2] }));
})

server.listen(port);
console.log(`server listening on port ${port}`);