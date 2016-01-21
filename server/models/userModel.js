var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;
var user = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    admin: {
        type: Boolean
    }
});
var userModel = mongoose.model('User', user);
module.exports = userModel;


