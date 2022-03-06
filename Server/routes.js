var express = require('express')
var router = express.Router()
var { pool } = require('./db')

router.get('/api/title', (req, res) => {
  res.json("Teacher's assistant")
})

router.get('/api/get/children', (req, res, next) => {
  pool.query(`SELECT * FROM children
            ORDER BY created_at DESC`,
    (q_err, q_res) => {
      res.json(q_res.rows)
    })
})

router.get('/api/get/children/:id', (req, res, next) => {
  const child_id = req.params.id

  pool.query(`SELECT * FROM children
              WHERE id=$1`,
    [child_id], (q_err, q_res) => {
      res.json(q_res.rows)
    })
})

module.exports = router