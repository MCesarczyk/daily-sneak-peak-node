const { pool } = require('../db');

const getAllChildren = (req, res, next) => {
  pool.query(`SELECT * FROM children
  ORDER BY created_at DESC`,
    (q_err, q_res) => {
      res.json(q_res.rows)
    })
};

const createChild = (req, res, next) => {
  const values = [req.body.name,
  req.body.surname,
  req.body.group,
  req.body.avatar]

  pool.query('INSERT INTO children (name, surname, "group", created_at, updated_at, avatar)\
   VALUES ($1, $2, $3, NOW(), NOW(), $4)',
    values, (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows)
    })
};

const getOneChild = (req, res, next) => {
  const child_id = req.params.id

  pool.query(`SELECT * FROM children
              WHERE id=$1`,
    [child_id], (q_err, q_res) => {
      res.json(q_res.rows)
    })
};

const updateChild = (req, res, next) => {
  const values = [req.body.name,
  req.body.surname,
  req.body.group,
  req.params.id]

  pool.query(`UPDATE children SET name=$1, surname=$2, "group"=$3, updated_at=NOW()\
   WHERE id=$4`,
    values, (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows)
    })
};

const deleteChild = (req, res, next) => {
  const child_id = req.params.id

  pool.query(`DELETE FROM children WHERE id = $1`,
    [child_id], (q_err, q_res) => {
      res.json(q_res.rows)
      console.log(q_err)
    })
};

module.exports = { getAllChildren, createChild, getOneChild, updateChild, deleteChild };