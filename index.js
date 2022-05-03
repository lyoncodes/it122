import express from 'express';
import { getAll, getResource} from './data.js';
import { boats } from './models/Boat.js';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  boats.find({}).lean().then((boats) => { 
    res.render('home', { boats: boats })
  })
})
app.post('/', (req, res) => {
  res.render('detail', { boat: getResource('name', req.body.name) })
})
app.get('/detail/:name', (req, res) => {
  boats.findOne({"name": req.params.name}).lean().then((boat) => {
    res.render('detail', { boat: boat })
  })
})

app.listen(process.env.PORT || 3000);