var express = require('express');
var router = express.Router();

//exports.name = function (req, res) {
//  res.json({
//    name: 'Bob'
//  });
//};

router.get('/', function(req, res, next) {
  res.json({
    name: 'Bob'
  });
});


module.exports = router;