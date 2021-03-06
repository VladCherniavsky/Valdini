var User = require('../models/userModel'),
    jwt = require('jsonwebtoken'),
    config = require('../config'),
    log = require('../lib/log')(module);

exports.signup = function (req, res, next) {
    'use strict';
    var userModel = new User({
        username: req.body.email,
        password: req.body.password
    });
    userModel.save().then(function (user) {
        if (user){
            log.info('User saved successfully');
            console.log(user);
            res.json({success: true, message: 'User is registered', user: user});
        }
    }).catch(function(err){
        console.log('errorrrrr');
        console.log(err);
        return next(err);
    });
};

exports.login = function (req, res, next) {
    console.log('login request');
    User.findOne({username: req.body.email}).then(function (user) {
        if (!user) {
            res.json({success: false, message: 'Authentication failed. User not found'});
        } else if (user) {
            console.log(user);
            if (user.password !== req.body.password) {
                res.json({success: false, message: 'Authentication failed. Wrong password'});
            } else {
                var userInfo = {
                    id: user._id,
                    admin: user.admin,
                    username: user.username
                };
                console.log(userInfo);
                var token = jwt.sign(userInfo, config.get('key'), {
                    expiresIn: config.get('expirationPeriod')
                });
                res.cookie('token', token);
                res.json({success: true, message: 'ok',  user: userInfo, token: token});
            }
        }
    }).catch(function (err) {
        return next(err);
    });
};

exports.getAllUsers = function (req, res, next) {
    'user strict';
    User.find({})
        .then(function (users) {

            res.json({success: true, users: users});
        }).catch(function (err) {
            next(err);
        });

};
exports.addInfo = function (req, res, next){
    console.log('req.body');
    console.log(req.body);
    User.update(
        {username: req.body.userName},
        {$set: {
            'firstName': req.body.firstName,
            'lastName': req.body.lastName,
            'phone': req.body.phone
        }}).then(function (data) {
            return res.json({success: true, message: 'User info is saved', username: req.body.userName});
        }, function (err) {
            console.log(err);
            return  res.json({success: false, message: 'User info not saved', username:req.body.userName});
        });

};



