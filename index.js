const http = require("http");

http.createServer((req, res) => {
  const path = req.url.toLowerCase()
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('This is the home route');
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('What draws thee late at night to the parts of MySpace that live behind the screen?');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('No resource found');
      break;
  }
}).listen(process.env.PORT || 3000);