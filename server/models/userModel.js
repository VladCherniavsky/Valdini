var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;
var user = new Schema({
    username: {
        type: String,
        index:true,
        unique: true ,
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

user.pre('save', function(next, done) {
    var self = this;
    console.log('dddd');
    console.log(self);

    mongoose.models.User.findOne({username : self.username},function(err, user) {
        if(err) {
            done(err);
        } else if(user) {
            console.warn('user', user);
            done(new Error('ValidationError','username must be unique'));
        } else {
            done();
        }
    });

});

module.exports = userModel;


