var express = require('express'),
    router = express.Router(),
    authCtrl = require('../controllers/authCtrl');


router.get('/fandoms', authCtrl.getFandoms);
router.get('/users',authCtrl.getAllUsers);
router.post('/login', authCtrl.login);
router.post('/register', authCtrl.signup)
router.post('/addInfo', authCtrl.addInfo);


module.exports = router;
