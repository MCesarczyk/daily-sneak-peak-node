const express = require('express');
const cors = require('cors');
const router = express.Router();

require('dotenv').config();

router.use(cors());

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:4000');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS, DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

router.get('/api/title', (req, res) => {
  res.json("Teacher's assistant")
});

router.use('/api/children', require('./children'));

router.use('/api/groups', require('./groups'));

router.use('/api/images', require('./images'));

module.exports = router;