import http from 'http';
import { parse } from 'querystring';
import { getAll, getResource } from './data.js';

const parseURL = (url) => {
  
  let query = parse(url)
  
  let options = (Object.keys(query)[0]).split("?");
  let id = (Object.values(query)[0]).replace(' ', '%20')
  
  let resource = options[0]
  let param = options[1]

  let route = `${resource}?${param}=${id}`

  return {
    route: route,
    param: param,
    id: id
  }
}

http.createServer((req, res) => {
  const detail = parseURL(req.url)
  const path = req.url.toLowerCase()

  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html', 'Connection': 'Keep-Alive'});
      res.end(JSON.stringify(getAll()));
      break;
    case detail.route:
      res.writeHead(200, {'Content-Type': 'text/html', 'Connection': 'Keep-Alive'});
      console.log('id about to be passed: ', detail.id)
      res.end(JSON.stringify(getResource(detail.param, (detail.id).replace('%20', ' '))));
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