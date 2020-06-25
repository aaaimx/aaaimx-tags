const { Line } = require('../dao/models')

function getLines () {
  return Line.find({})
}

function getLineById(id) {
  return Line.findById(id)
}

function createLines (data) {
  return Line.insertMany(data)
}

module.exports = {
  getLines,
  getLineById,
  createLines
}
