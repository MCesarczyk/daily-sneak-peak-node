var express = require('express')
var router = express.Router()
var { pool } = require('./db')

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

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
                   
  pool.query('INSERT INTO children (name, surname, "group", created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW())',
              values, (q_err, q_res) => {
                if(q_err) return next(q_err);
                res.json(q_res.rows)
              })
})

router.put('/api/put/children/:id', (req, res, next) => {
  const values = [ req.body.name,
                   req.body.surname,
                   req.body.group,
                   req.params.id ]

  pool.query(`UPDATE children SET name=$1, surname=$2, "group"=$3, updated_at=NOW() WHERE id=$4`,
                values, (q_err, q_res) => {
                  if(q_err) return next(q_err);
                  res.json(q_res.rows)
                })
})

router.delete('/api/delete/children/:id', (req, res, next) => {
  const child_id = req.params.id

  pool.query(`DELETE FROM children WHERE id = $1`,
              [ child_id ], (q_err, q_res) => {
                res.json(q_res.rows)
                console.log(q_err)
              })
})

module.exports = router
