var express = require('express'),
    router = express.Router(),
    fandomsCtrl = require('../controllers/fandomsCtrl');


router.get('/fandoms', fandomsCtrl.getFandoms);
module.exports = router;