var express = require('express'),
    router = express.Router(),
    fandomsCtrl = require('../controllers/fandomsCtrl');



router.get('/fandoms', fandomsCtrl.getFandoms);
router.post('/fandoms',  fandomsCtrl.refreshFandomsArrayForUser);
module.exports = router;