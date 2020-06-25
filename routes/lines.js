const express = require('express')
const router = express.Router()
const { getLines, getLineById, createLines } = require('../controllers/lines')

/* GET line listing. */
router.get('/', async (req, res, next) => {
  const lines = await getLines()
  res.send(lines)
})

/* POST create new line. */
router.post('/', async (req, res, next) => {
  var data = [
    {
      name: 'John'
    },
    {
      name: 'Smith'
    },
    {
      name: 'Lisa'
    }
  ]

  const lines = await createLines(data)
  res.send(lines)
})

/* GET line detail. */
router.get('/:id', async (req, res, next) => {
  var id = req.params.id
  const line = await getLineById(id)
  res.send(line)
})

/* PUT line update. */
router.put('/:id', (req, res, next) => {
  res.send('respond with a resource')
})

/* DELETE line delete. */
router.delete('/:id', (req, res, next) => {
  res.send('respond with a resource')
})

module.exports = router
