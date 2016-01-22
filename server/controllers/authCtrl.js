var User = require('../models/userModel'),
    jwt = require('jsonwebtoken');

exports.signup = function (req, res, next) {
    'use strict';

    console.log(req.body.email);
    User.findOne({username: req.body.email})
        .then(function (user) {
            if (user) {
                console.log(user);
                res.json({success: false, message: 'This email already taken. Please choose another one'});
            } else {
                console.log(user);
                var userModel = new User({
                    username: req.body.email,
                    password: req.body.password,
                    admin: req.body.access
                });
                userModel.save(function (err, savedUser) {
                    if (err) {
                        next(err);
                    }
                    console.log('User saves successfully');

                    res.json({success: true,
                        message: 'User is registered',
                        user: savedUser.username
                    });
                });
            }
        }).catch(next);
};

exports.login = function (req, res) {
    console.log('login request');
    User.findOne({username: req.body.email}).then(function (user) {
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

exports.getAllUsers = function (req, res, next) {
    'user strict';
    User.find({})
        .then(function (users) {
            res.json(users);
        }, function(err) {
            next(err);
        })
        .catch(next);
}
exports.addInfo = function (req, res, next){
    console.log(req.body);
   User.find({username: req.body.userName})
        .then(function(user){
            if(!user){
                res.json({success: false, message: 'User not found'});
            } else if (user) {
                var upsertUser = new User({
                    firstName:req.body.firstName,
                    lastName: req.body.lastName,
                    phone:req.body.phone
                });

                console.log(user);
                User.update({_id:user._id},upsertUser, function(err, updatedUser){
                    if (err) {
                        return  res.json({success: false, message: 'User info not saved', username: req.body.userName});
                    } else {
                        return res.json({success: true, message: 'User info is saved', username: req.body.userName});
                    }
                });

            }
        });
};


