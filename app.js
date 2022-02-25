const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Daily sneak peak!');
});

app.listen(port, () => {
  console.log(`Start DSP Node version on port ${port}`);
});