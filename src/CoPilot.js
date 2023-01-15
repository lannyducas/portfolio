// Express server on port 3000
const express = require('express');
const app = express();
const port = 3000;
// Return the current time
app.get('/time', (req, res) => {
  res.send(new Date().toLocaleTimeString());
});