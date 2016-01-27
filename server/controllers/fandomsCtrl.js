var Fandom = require('../models/fandomsModel'),
    jwt = require('jsonwebtoken');


exports.getFandoms = function (req, res, next) {
    console.log(req.query);
    Fandom.count({}).then(function (ammount) {
        console.log(ammount);
        if(req.query.skip < ammount) {
            Fandom.find({}, null, {
                skip: Number(req.query.skip),
                limit: Number(req.query.perPage)})
                .then(function (fandoms) {
                    console.log(fandoms);
                    if(fandoms) {
                        if (fandoms.length < Number(req.query.perPage)) {
                            res.json({success: true, message: 'ok', fandoms: fandoms, end: true});
                        } else {
                            res.json({success: true, message: 'ok', fandoms: fandoms, end: false});
                        }
                    }
                });
       } else {
            res.json({success: false, message: 'There are no more records in db',end: false});
        }
    });
};

