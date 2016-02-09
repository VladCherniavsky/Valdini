var express = require('express'),
    multer  = require('multer'),
    fandomsCtrl = require('../controllers/fandomsCtrl');
var fs = require('fs');
var parse = require('csv-parse');


var parser = parse({skip_empty_lines : true, delimiter: ','});

var storage = multer.memoryStorage();
var upload = multer({ dest: 'uploads/' }),
    router = express.Router();


router.post('/document/upload', upload.single('file'), function (req, res, next){

    console.log('req.file', req.file);
    console.log('req.body', req.body);
    fs.createReadStream(req.file.path).pipe(parser)
        .on('data', function(line) {
        console.log(line);
        });

    res.status(200).json(req.file);

});

module.exports = router;