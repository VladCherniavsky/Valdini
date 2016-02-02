var mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

var user = new Schema({
    username: {
        type: String,
        unique: 'this username already exists',
        required: true
    },
    password: {
        type: String,
        required: true
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

user.plugin(uniqueValidator);
var userModel = mongoose.model('User', user);
module.exports = userModel;


