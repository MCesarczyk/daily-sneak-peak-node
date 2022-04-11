const AWS = require('aws-sdk');
const { pool } = require('../db')
const imagesService = require('../utils/uploadImage');

var s3 = new AWS.S3({
  endpoint: 's3-eu-central-1.amazonaws.com',
  signatureVersion: 'v4',
  region: 'eu-central-1',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const uploadAvatar = async (req, res, next) => {
  const childId = req.params.childId;
  console.log(`Upload avatar for child: ${childId}`);
  const key = Date.now().toString();
  const base64Image = req.body.image;
  let response;

  try {
    response = await imagesService.upload(key, base64Image);
  } catch (err) {
    console.error(`Error uploading image: ${err.message}`);
    return next(new Error(`Error uploading image`));
  }

  const values = [key, req.params.childId];

  pool.query(`UPDATE children SET avatar=$1, updated_at=NOW() WHERE id=$2`,
    values, (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows)
    });
};

const getAvatarUrl = (req, res, next) => {
  const params = {
    Bucket: process.env.DAILY_SNEAK_PEAK_AWS_S3_BUCKET,
    Key: req.params.fileId,
    Expires: 60
  };

  var url = s3.getSignedUrl('getObject', params);
  res.send(url);
};

module.exports = { uploadAvatar, getAvatarUrl };