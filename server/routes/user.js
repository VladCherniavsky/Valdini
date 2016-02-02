var express = require('express'),
    router = express.Router(),
    authCtrl = require('../controllers/authCtrl'),
    checkToken = require('../lib/checkToken');


router.get('/users', checkToken, authCtrl.getAllUsers);
router.post('/login', authCtrl.login);
router.post('/register', authCtrl.signup);
router.post('/addInfo',checkToken, authCtrl.addInfo);


module.exports = router;
