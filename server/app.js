
 /*jslint white: true */



 var express     = require('express'),
   db          = require('./lib/mongoose'),
   passport    = require('passport'),
   bodyParser  = require('body-parser'),
  methodOverride = require('method-override'),
   morgan      = require('morgan'),
   jwt         = require('jsonwebtoken'),
   config      = require('./config/config');

   var User = require('./models/userModel');
   var checkToken = require('./lib/checkToken');
   var checkTokenRoute = require('./routes/checkToken');
  

   var userRouter = require('./routes/user');

   var app=express(); 
   
   app.use(bodyParser.urlencoded({extended:false}));
   app.use(bodyParser.json());
   app.use(methodOverride());
   app.use(morgan('dev'));
   app.use(express.static(__dirname+'../../public'));  
   
   userRouter.get('/vlad', function(req,res){
    console.log(req.body);
     User.find({},function(err,users){
        res.json(users);
    });
 });
 app.use('/api', userRouter);
   userRouter.post('/checkToken', function(req,res){
  console.log('checktoken request');
  console.log(req.body.token);
  var token = req.body.token;

    
    if(token){
        jwt.verify(token,'vlados',function(err,decoded){
            if(err){

                return res.json({
                    success:false,
                    message:'Failed to authenticate token',
                    error:err
                });                
            }else{
              console.log(decoded);
              console.log('decoded');
                req.decoded=decoded;
                return res.json({
                  success:true,
                  message:'token is valid',
                  info:decoded
                });
            }

        });
    }else{
        return res.status(403).send({
            success:false,
            message:'no token provided'
        });
    }

});
   //userRouter.use(checkToken);
  


   

   app.listen(3000, function(){
    'use strict';
    console.log("server is running on port 3000");    

});


