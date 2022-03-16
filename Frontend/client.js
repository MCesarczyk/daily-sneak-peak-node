const express = require('express');
const client = express();
const path = require('path');
const port = '4000';

client.use(express.static(path.join(__dirname, 'build')));
client.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});
client.listen(port, () => {
   console.log(`server is running on port ${port}`);
   console.log(`Open your browser and hit url 'localhost:${port}'`);
});