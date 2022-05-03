import mongoose from 'mongoose'

const boatSchema = mongoose.Schema({
  name: String,
  length: Number,
  type: String,
  id: Number
},
{
  collection: 'boats'
});

const boats = mongoose.model('boats', boatSchema)

export { boats }