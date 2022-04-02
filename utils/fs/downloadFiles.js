const AWS = require('aws-sdk');
const s3 = new AWS.S3();

s3.getObject(
  { Bucket: "mcesarcz-daily-sneak-peak-storage", Key: "1648740066019" },
  (err, data) => {
    if (err != null) {
      console.log("Failed to retrieve an object: " + err);
    } else {
      console.log("Loaded " + data.ContentLength + " bytes", data.ContentType);
      if (data.ContentType === ('text' || 'text/plain')) {
        console.log(data.Body.toString());
      }
    }
  }
);