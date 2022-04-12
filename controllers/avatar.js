const AWS = require('aws-sdk');
const imagesService = require('../utils/uploadImage');

var s3 = new AWS.S3({
  endpoint: 's3-eu-central-1.amazonaws.com',
  signatureVersion: 'v4',
  region: 'eu-central-1',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const uploadAvatar = async (req, res, next) => {
  const key = req.body.name;
  const base64Image = req.body.image;

  try {
    const response = await imagesService.upload(key, base64Image);
    res.json(response);
  } catch (err) {
    console.error(`Error uploading image: ${err.message}`);
    return next(new Error(`Error uploading image`));
  }
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