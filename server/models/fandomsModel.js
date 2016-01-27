var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;
var fandom = new Schema({
    name: {
        type: String
    },
    avatar: {
        type: String
    }

});
var fandomModel = mongoose.model('Fandom', fandom);
module.exports = fandomModel;