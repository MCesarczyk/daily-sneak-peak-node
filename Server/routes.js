var express = require('express')
var router = express.Router()
var children = require('./mocks/children.json')

router.get('/api/title', (req, res) => {
  res.json("Teacher's assistant")
})

router.get('/api/get/children', (req, res, next) => {
  res.json(children)
})

module.exports = router