const AWS = require('aws-sdk');
const fs = require('fs');
require('dotenv').config();

const s3 = new AWS.S3({
  accessKeyId: process.env.DAILY_SNEAK_PEAK_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.DAILY_SNEAK_PEAK_AWS_SECRET_ACCESS_KEY
});

const fileData = fs.readFileSync('../mocks/notebook.jpg');

const params = {
  // Bucket: process.env.DAILY_SNEAK_PEAK_AWS_S3_BUCKET,
  Bucket: 'mcesarcz-daily-sneak-peak-storage',
  Key: 'notebook.jpg',
  Body: fileData,
  ContentType: 'image/jpg',
  CacheControl: "max-age=172800",
  // ACL: "public-read",
};

async function uploadFiles() {
  s3.upload(params, function (error, data) {
    if (error) {
      throw error;
    }
    console.log(`File was uploaded successfully. ${data.Location}`);
  });
}

uploadFiles()