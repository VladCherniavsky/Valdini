var User = require('../models/userModel'),
    jwt = require('jsonwebtoken');

exports.signup = function (req, res) {
    'use strict';

    console.log(req.body.email);
    User.findOne({
        username: req.body.email
    }, function (err, user) {
        if (err) {
            console.log('err');
            console.log(err);
            throw err;
        }
        if (user) {
            console.log(user);
            res.json({success: false, message: 'User name already taken'});
        } else {
            var userModel = new User({
                username: req.body.email,
                password: req.body.password,
                admin: req.body.access
            });
            userModel.save(function (err) {
                if (err) {
                    throw err;
                }
                console.log('User saves successfully');
                console.log(res);

                res.json({success: true, message: 'User is registered'});
            });
        }
    });
};

exports.login = function (req, res) {
    console.log('login request');
    User.findOne({
        username: req.body.email
    }, function (err, user) {
        if (err) {
            throw err;
        }
        if (!user) {
            res.json({success: false, message: 'Authentication failed. User not found'});
        } else if (user) {
            console.log('password');
            if (user.password !== req.body.password) {
                res.json({success: false, message: 'Authentication failed. Wrong password'});
            } else {
                var userInfo = {
                    id: user._id,
                    admin: user.admin,
                    username: user.username
                };
                console.log(userInfo);
                var token = jwt.sign(userInfo, 'vlados', {
                    expiresIn: '100s'
                });
                res.json({success: true, message: 'ok',  user: userInfo, token: token});
            }
        }
    });
};

exports.getAllUsers = function (req, res) {
    'user strict';
    User.find({}, function (err, users) {
        res.json(users);
    });
};


