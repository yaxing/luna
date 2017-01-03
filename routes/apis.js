var express = require('express')
var router = express.Router()
var winston = require('winston');

router.use(function timeLog (req, res, next) {
  winston.info('Time: ' + Date.now());
  next()
})

router.get('/echo/:data', function(req, res) {
	res.send(req.params);
});

module.exports = router
