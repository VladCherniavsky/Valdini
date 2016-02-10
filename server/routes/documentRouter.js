var express = require('express'),
    documentCtrl = require('../controllers/documentCtrl'),
    router = express.Router();
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ dest: 'uploads/' });




router.post('/document/upload', upload.single('file'), documentCtrl.fillArray, documentCtrl.saveLogsToDB);
router.get('/document/logs', documentCtrl.getLogs);
module.exports = router;