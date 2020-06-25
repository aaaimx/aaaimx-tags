const mongoose = require('mongoose')

const uri =
  'mongodb://localhost:27017/test'

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })

const connection = mongoose.connection

module.exports = {
    connection
}