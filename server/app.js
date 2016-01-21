
/*jslint white: true */



var express     = require('express'),
    db          = require('./lib/mongoose'),
    passport    = require('passport'),
    bodyParser  = require('body-parser'),
    methodOverride = require('method-override'),
    morgan      = require('morgan'),
    jwt         = require('jsonwebtoken'),
    config      = require('./config/config'),
    favicon = require('serve-favicon');



var User = require('./models/userModel');
var checkToken = require('./lib/checkToken');
var checkTokenRoute = require('./routes/checkToken');


var userRouter = require('./routes/user');

var app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));
app.use(favicon(__dirname + '../../public/assets/favicon.ico'));
app.use(express.static(__dirname+'../../public'));
app.disable('etag');

userRouter.use(checkTokenRoute);
//userRouter.use(checkToken);
app.use('/api', userRouter);




app.listen(3000, function(){
    'use strict';
    console.log("server is running on port 3000");
});

