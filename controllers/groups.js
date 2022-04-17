const { pool } = require('../db');

const getAllGroups = (req, res, next) => {
  pool.query(`SELECT * FROM groups
  ORDER BY "name" DESC`,
    (q_err, q_res) => {
      res.json(q_res.rows)
    })
};

const createGroup = (req, res, next) => {
  const values = [req.body.name,
                  req.body.description,
                  req.body.notes,
                  req.body.avatar]

  pool.query('INSERT INTO groups (name, description, notes, avatar, created_at, updated_at)\
   VALUES ($1, $2, $3, $4, NOW(), NOW())',
    values, (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows)
    })
};

const getOneGroup = (req, res, next) => {
  const group_id = req.params.id

  pool.query(`SELECT * FROM groups
              WHERE gid=$1`,
    [group_id], (q_err, q_res) => {
      res.json(q_res.rows)
    })
};

const updateGroup = (req, res, next) => {
  const values = [req.body.name,
                  req.body.description,
                  req.body.notes,
                  req.body.avatar,
                  req.params.id]

  pool.query(`UPDATE groups SET name=$1, description=$2, notes=$3, avatar=$4, updated_at=NOW()\
   WHERE gid=$5`,
    values, (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows)
    })
};

const deleteGroup = (req, res, next) => {
  const group_id = req.params.id

  pool.query(`DELETE FROM groups WHERE gid = $1`,
    [group_id], (q_err, q_res) => {
      res.json(q_res.rows)
      console.log(q_err)
    })
};

module.exports = { getAllGroups, createGroup, getOneGroup, updateGroup, deleteGroup };