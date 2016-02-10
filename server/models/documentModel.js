/**
 * Created by vlad.cherniavsky on 10.02.2016.
 */
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;
var document = new Schema({
    logs: {
        type: []
    }
});
var docuentModel = mongoose.model('Document', document);
module.exports = docuentModel;