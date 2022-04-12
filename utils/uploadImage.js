const AWS = require('aws-sdk');
const s3 = new AWS.S3({});
const bucketName = process.env.DAILY_SNEAK_PEAK_AWS_S3_BUCKET;

const promiseUpload = (params) => {
  return new Promise(function (resolve, reject) {
    s3.upload(params, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const uploadImage = async (key, base64Image) => {
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: new Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
    ContentType: 'image/png',
  };

  let data;

  try {
    data = await promiseUpload(params);
  } catch (err) {
    console.error(err);

    return "";
  }

  return data.Location;
};

module.exports = { upload: uploadImage };