const express = require('express')
const cors = require('cors')
const router = express.Router()
const { pool } = require('./db')
const AWS = require('aws-sdk')
const upload = require('./utils/imageUpload');
const singleUpload = upload.single('file');
require('dotenv').config()

var s3 = new AWS.S3( {
  endpoint: 's3-eu-central-1.amazonaws.com',
  signatureVersion: 'v4',
  region: 'eu-central-1'
} );

router.use(cors())

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:4000');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS, DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  next();
})

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
  const values = [req.body.name,
  req.body.surname,
  req.body.group]

  pool.query('INSERT INTO children (name, surname, "group", created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW())',
    values, (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows)
    })
})

router.put('/api/put/children/:id', (req, res, next) => {
  const values = [req.body.name,
  req.body.surname,
  req.body.group,
  req.params.id]

  pool.query(`UPDATE children SET name=$1, surname=$2, "group"=$3, updated_at=NOW() WHERE id=$4`,
    values, (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows)
    })
})

router.delete('/api/delete/children/:id', (req, res, next) => {
  const child_id = req.params.id

  pool.query(`DELETE FROM children WHERE id = $1`,
    [child_id], (q_err, q_res) => {
      res.json(q_res.rows)
      console.log(q_err)
    })
})

router.post("/api/put/children/:id/add-picture",
  (req, res, next) => {
    singleUpload(req, res,
      (err) => {
        if (err) {
          return res.json({
            success: false,
            errors: {
              title: "Image Upload Error",
              detail: err.message,
              error: err,
            },
          });
        }

        const values = [req.file.key, req.params.id];

        pool.query(`UPDATE children SET avatar=$1, updated_at=NOW() WHERE id=$2`,
          values, (q_err, q_res) => {
            if (q_err) return next(q_err);
            res.json(q_res.rows)
          })
      });
  });

router.get('/api/get/fileUrl/:fileId', (req, res, next) => {
  const params = {
    Bucket: process.env.DAILY_SNEAK_PEAK_AWS_S3_BUCKET,
    Key: req.params.fileId,
    Expires: 60
  };

  var url = s3.getSignedUrl('getObject', params);
  res.send(url);
});

router.get('/api/get/file/:fileId', (req, res, next) => {
  const params = {
    Bucket: process.env.DAILY_SNEAK_PEAK_AWS_S3_BUCKET,
    Key: req.params.fileId
  };

  const encode = (data) => {
    let buf = Buffer.from(data);
    let base64 = buf.toString('base64');
    return base64;
  };

  s3.getObject(
    params, (err, data) => {
      if (err != null) {
        res.json("Failed to retrieve an object: " + err);
      } else {
        if (
          data.ContentType === 'text' ||
          data.ContentType === 'text/plain'
        ) {
          res.send(data.Body.toString());
        } else if (
          data.ContentType === 'image/jpg' ||
          data.ContentType === 'image/jpeg' ||
          data.ContentType === 'image/png'
        ) {
          const img = `<img src='data:${data.ContentType};base64,${encode(data.Body)}'/>`;
          res.send(img);
        } else {
          res.send(data.Body.toString());
        }
      }
    }
  );
});

module.exports = router