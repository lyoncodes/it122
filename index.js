import express from 'express';
import { getAll, getResource} from './data.js';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  res.render('home', { boats: getAll() })
})
app.post('/', (req, res) => {
  res.render('detail', { boat: getResource('name', req.body.name) })
})
app.get('/detail/:name', (req, res) => {
  res.render('detail', { boat: getResource('name', req.params.name) })
})

app.listen(process.env.PORT || 3000);