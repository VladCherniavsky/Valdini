/**
 * Created by vlad.cherniavsky on 10.02.2016.
 */
var fs = require('fs'),
    parse = require('csv-parse'),
    removeWhiteSpaceFromArray = require('../lib/parseArray'),
    parseDatetime = require('../lib/parseDateTime'),
    validateArray = require('../lib/validateArray'),
    Document = require('../models/documentModel');



var parser = parse({
    skip_empty_lines : true,
    delimiter: ',',
    escape: '',
    trim: true
});


exports.fillArray = function (req, res, next){
    var parsedDataArray = [];
    var input = fs.createReadStream(req.file.path);
    input.pipe(parser)
        .on('data', function(line) {
            parsedDataArray.push(removeWhiteSpaceFromArray(line));
        })
        .on('finish', function () {
            req.parsedDataArray = parsedDataArray;
            input.close();
            next();
        });


};

exports.saveLogsToDB = function (req, res, next) {

    var result =  validateArray(req.parsedDataArray);

    var documentModel = new Document({
        logs: result.saveToDb
    });
    documentModel.save().then(function (logs) {
        if (logs){
            res.status(200).json({
                success: true,
                recordsCount: req.parsedDataArray.length,
                savedRecords: result.saveToDb.length,
                skippedRecords: result.saveToDb.length,
                skipped:result.skippedItems,
                records: logs
            });

        }
    }).catch(function(err){
        console.log('error');
        console.log(err);
        return next(err);
    });

};
exports.getLogs = function (req, res, next) {
    console.log('body', req.body);
    Document.find({})
        .then(function (logs) {

            res.json({success: true, logs: logs});
        }).catch(function (err) {
            next(err);
        });
};