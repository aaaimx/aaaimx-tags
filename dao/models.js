const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Line = mongoose.model(
  'Line',
  new Schema({
    topic: String
  })
)

const Division = mongoose.model(
  'Division',
  new Schema({
    name: String
  })
)

module.exports = {
  Line,
  Division
}
