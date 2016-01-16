var express = require('express');
var User = require('../models/userModel');
var jwt = require('jsonwebtoken');
var router = express.Router();



    router.get('/users', function(req,res){
     'user strict';
     User.find({},function(err,users){
        res.json(users);
    });
 });

    router.post('/login', function(req,res){
        console.log('request');
        console.log(req.body);
        User.findOne({
            username:req.body.email
        },function(err,user){
            if(err){
                throw err;
            }
            if(!user){
                res.json({success:false, message:'Authentication failed. User not found'});
            }else if(user){
                console.log('password');
               
                if(user.password!=req.body.password){
                    res.json({success:false, message:'Authentication failed. Wrong password'});
                }else{
                    
                    var userInfo = {
                        id:user._id,
                        admin:user.admin,
                        username:user.username
                    };
                    console.log(userInfo);
                    var token = jwt.sign(userInfo,'vlados',{
                        expiresIn:'1h'
                    });
                    res.json({success:true, message:'ok',  user:userInfo,token:token,});
                }
            }
        });
    });

    router.post('/register', function(req,res){
        console.log(req.body);
        'use strict';
        var user = new  User({
          username: req.body.email,
          password: req.body.password,
          admin:req.body.access
        });
        user.save(function(err){
          if(err){
            throw err;
          }
          console.log('User saves successfully');
          res.json({
            success:true,
            message:'user is  registered'
        });
        });
      });



     module.exports=router;
