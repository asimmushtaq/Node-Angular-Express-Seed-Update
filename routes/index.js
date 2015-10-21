var express = require('express');
var router = express.Router();

//additions for controller
var indexController=require('../controllers/index.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//when you have results no need to return the function this way
router.get('/cafe', indexController.index);

router.get('/partials/:name', indexController.partials);


module.exports = router;



