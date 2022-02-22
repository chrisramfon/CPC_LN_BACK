var express = require('express');
var router = express.Router();
const iniciosesion = require('../controllers/iniciosesion');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inicio', iniciosesion.conectar);

module.exports = router;
