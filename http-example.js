const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url == '/') {
    return res.end('Welcome to home page');
  }
  if (req.url == '/about') {
    res.end('Here is our short history');
    return;
  }

  res.end(`
  <h1>OOPs!</h1>
  <p>Page not found</p>
  <a href="/">Back to home</a>
  `);
});

server.listen(5000, () => {
  console.log('Listening to port 5000');
});
