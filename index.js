import http from 'http';
import { parse } from 'querystring';
import { boats, getAll, getResource } from './data.js';

http.createServer((req, res) => {
  const path = req.url.toLowerCase()
  let url = req.url.split("?");
  let query = parse(url[1]);
  let param = Object.keys(query)[0];
  
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html', 'Connection': 'Keep-Alive'});
      res.end(JSON.stringify(getAll()));
      break;
    case `/detail?${param}=${query.name}`:
      res.writeHead(200, {'Content-Type': 'text/html', 'Connection': 'Keep-Alive'});
      res.end(JSON.stringify(getResource(`${param}`, `${query.name}`)));
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('What draws thee late at night to the parts of MySpace that live behind the screen?');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end('No resource found');
      break;
  }
}).listen(process.env.PORT || 3000);