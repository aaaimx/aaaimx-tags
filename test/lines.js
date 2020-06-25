const { assert, expect } = require('chai')
const server = require('../bin/www')
const request = require('supertest')(server)
const { getLines } = require('../controllers/lines')


describe('Pruebas para lineas de investigación', function () {
  describe('Checar obtener lineas de investigación ', function () {
    it('Checar funcion getLines()', async () => {
      const result = await getLines()
      expect(result).to.be.an('array')
    })
    it('Checar la API /lines', done => {
      request.get('/lines').end((err, response) => {
        if (err) done(err)
        expect(response.body).to.be.an('array') 
        expect(response.statusCode).to.equal(200)
        done()
      })
    })
  })
})

