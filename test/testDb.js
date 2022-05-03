import { boats } from '../models/Boat.js';

boats.find({}).lean().then((boat) => {
    console.log(boat)
  })
  .catch(err => next(err));