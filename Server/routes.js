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

router.post('/api/post/childtodb', (req, res, next) => {
  const values = [ req.body.name,
                   req.body.surname,
                   req.body.group ]
                   console.log(values);
  pool.query('INSERT INTO children (name, surname, "group", created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW())',
              values, (q_err, q_res) => {
                if(q_err) return next(q_err);
                res.json(q_res.rows)
              })
})

module.exports = router