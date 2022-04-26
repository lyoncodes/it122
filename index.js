import express from 'express';
import { getAll, getResource } from './data.js';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.render('home', {boats: getAll()})
})
app.post('/', (req, res) => {
  res.render('detail', getResource('name', req.body.name))
})
app.get('/detail/:name', (req, res) => {
  const boat = getResource('name', req.params.name)
  res.render('detail', { name: boat.name, length: boat.length, type: boat.type })
})

app.listen(process.env.PORT || 3000);