var express = require('express'),
    multer  = require('multer'),
    fandomsCtrl = require('../controllers/fandomsCtrl');

var storage = multer.memoryStorage();
var upload = multer({ storage: storage }),
    router = express.Router();


router.post('/document/upload', upload.single('file'), function (req, res, next){
    console.log('req.files', req.files);
    console.log('req.file', req.file);
    console.log('req.body', req.body);
    res.status(200).json(req.file);
});

module.exports = router;