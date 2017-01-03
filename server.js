'use strict';
var apis = require('./routes/apis'); 

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

app.get('/ping', function (req, res) {
  res.send('pong');
});

app.use('/apis', apis);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
	res.status(404).send('Not Found');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
