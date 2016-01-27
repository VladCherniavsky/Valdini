var express = require('express'),
    checkTokenCtrl = require('../controllers/checkTokenCtrl');

var router = express.Router();
router.post('/checkToken', checkTokenCtrl.checkToken);
 module.exports = router;





