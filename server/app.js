/**
 * Created by vlad.cherniavsky on 18.12.2015.
 */
 /*jslint white: true */



 var express     = require('express'),
   // db          = require('./lib/mongoose'),
   passport    = require('passport'),
   bodyParser  = require('body-parser'),
   morgan      = require('morgan'),
   jwt         = require('jsonwebtoken'),
   // config      = require('./config/config'),
   User        = require('./models/userModel');



   var app=express();


   var apiRoutes=express.Router();

   app.use(express.static(__dirname+'../../public'));
   app.use(bodyParser.urlencoded({extended:false}));
   app.use(bodyParser.json());
   app.use(morgan('dev'));



   apiRoutes.get('/',function(req,res){
     
    res.json({message:'Welcome to the coolest api in the world'});
});
   apiRoutes.get('/users', function(req,res){
     'user strict';
     User.find({},function(err,users){
        res.json(users);
    });
 });

   apiRoutes.post('/authenticate', function(req,res){
     
    User.findOne({
        username:req.body.name
    },function(err,user){
        if(err){
            throw err;
        }
        if(!user){
            res.json({success:false, message:'Authentication failed. User not found'});
        }else if(user){
            if(user.password!=req.body.password){
                res.json({success:false, message:'Authentication failed. Wrong password'});
            }else{

                var token = jwt.sign(user,'vlados',{
                    expiresInMinutes:1440
                });

                res.json({success:true, message:'ok', token:token});
            }
        }


    });
});

   apiRoutes.use(function(req,res,next){
    console.log('check token');
    var token = req.body.token ||req.query.token || req.headers['x-access-token'];
    if(token){
        jwt.verify(token,'vlados',function(err,decoded){
            if(err){
                return res.json({
                    success:false,
                    message:'Failed to authenticate token'
                });                
            }else{
                req.decoded=decoded;
                next();
            }

        });
    }else{
        return res.status(403).send({
            success:false,
            message:'no token provided'
        });
    }
});


   app.use('/api',apiRoutes);

   app.get('/', function(req,res){
       
    res.send("Hello from app.js");
});

   app.get('/setup', function(req,res){
     'use strict';
     var vlad = new  User({
        username: "vlad",
        password: "vlad",
        admin:true
    });
     vlad.save(function(err){
        if(err){
            throw err;
        }

        console.log('User saves successfully');
        res.json({success:true});
    });
 });





   app.listen(3000, function(){
    'use strict';
    console.log("server is running on port 3000");
});


