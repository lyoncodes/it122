import express from 'express';
import cors from 'cors';
import { getAll, getResource} from './data.js';
import { boats } from './models/Boat.js';
import { api } from './routes.js';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.json());
// api routing
app.use('/api', cors());
app.use('/api', api)

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
app.get('/delete/:name', (req, res) => {
  boats.deleteOne({ name: req.params.name }).then(() => {
    console.log('deleted');
  })
})
app.listen(process.env.PORT || 3000);