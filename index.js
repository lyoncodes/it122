import express from 'express';
import { getAll, getResource } from './data.js';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  const obj = JSON.stringify(getAll())
  const boat = JSON.parse(obj)
  let boats = []
  boat.forEach(element => {
    boats.push(element)
  });
  res.render('home', {boats: boats})
})
app.post('/', (req, res) => {
  // const obj = JSON.stringify(getResource('name', req.body.name))
  // const boat = JSON.parse(obj)
  const boat = getResource('name', req.body.name)
  res.render('detail', { name: boat.name, length: boat.length, type: boat.type })
})
app.get('/detail/:id', (req, res) => {
  const boat = getResource('name', req.params.id)
  res.render('detail', { name: boat.name, length: boat.length, type: boat.type })
})

app.listen(process.env.PORT || 3000);