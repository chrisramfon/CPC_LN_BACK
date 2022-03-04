let express = require('express');
let router = express.Router();
const cuenta = require('../controllers/cuenta');

router.post('/reg', cuenta.reg);

router.get('/everyone', cuenta.everyone);

router.post('/find', cuenta.find);

router.post('/down', cuenta.down);

module.exports = router;