var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;
var user = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: String
    },
    subscribedFandoms: {
        type: [String]
    },
    updated: {
        type: Date,
        default: Date.now
    }
});
var userModel = mongoose.model('User', user);
module.exports = userModel;


