import mongoose from "mongoose";
import { connection } from '../cred.js';

mongoose.connect(connection, {
  dbName: 'it122',
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('open', () => {
  console.log('connected to DB')
})

const boatSchema = mongoose.Schema({
  name: String,
  length: Number,
  type: String,
}, {
  collection: 'boats'
});

const boats = mongoose.model('boats', boatSchema)

export { boats }

