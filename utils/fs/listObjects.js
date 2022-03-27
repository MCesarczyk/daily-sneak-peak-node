var AWS = require('aws-sdk');

s3 = new AWS.S3({ apiVersion: '2006-03-01' });

var bucketParams = {
  Bucket: 'mcesarcz-daily-sneak-peak-storage',
};

s3.listObjects(bucketParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});