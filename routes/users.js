var express = require('express');
var router = express.Router();
const register = require('../controllers/register');
const login = require('../controllers/login');


/* GET users listing. */
router.post('/register', register.reg);//Ruta para registrar usuario

router.post('/login', login.log);



module.exports = router;