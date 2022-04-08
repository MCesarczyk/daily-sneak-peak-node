const express = require('express');
const cors = require('cors');
const router = express.Router();
const AWS = require('aws-sdk');
require('dotenv').config();

var s3 = new AWS.S3({
  endpoint: 's3-eu-central-1.amazonaws.com',
  signatureVersion: 'v4',
  region: 'eu-central-1'
});

router.use(cors());

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:4000');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS, DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  next();
})

router.get('/api/title', (req, res) => {
  res.json("Teacher's assistant")
})

router.use('/children', require('./children'));

module.exports = router;