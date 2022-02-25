var express = require('express');
var router = express.Router();
const register = require('../controllers/register');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', register.reg);//Ruta para registrar usuario

module.exports = router;