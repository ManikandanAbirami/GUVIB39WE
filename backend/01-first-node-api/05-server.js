const querstring = require('querystring');
const express = require('express');

const port = process.env.PORT || 9000;

const app = express();

app.get('/', respondText);
app.get('/json', respondJSON);
app.get('/test', respondInputs);
app.get('*', respondNotFound);


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

function respondInputs(req, res) {
  const { input = '' } = querstring.parse(
    req.url
      .split('?')
      .slice(1)
      .join('')
  )

  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      normal: input,
      caps: input.toUpperCase(),
      count: input.length,
      reverse: input
        .split('')
        .reverse()
        .join('')
    })
  )

}
app.listen(port, () => { console.log(`server listening on port ${port}`); })
