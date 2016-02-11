
/*jslint white: true */



var express     = require('express'),
    db          = require('./lib/mongoose'),
    passport    = require('passport'),
    bodyParser  = require('body-parser'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
    morgan      = require('morgan'),
    jwt         = require('jsonwebtoken'),
    config = require('./config'),
    multer  = require('multer'),
    favicon = require('serve-favicon');



var User = require('./models/userModel');
var checkToken = require('./lib/checkToken');




var authRouter = require('./routes/user'),
    fandomsRouter = require('./routes/fandomsRouter'),
    documentRouter = require('./routes/documentRouter');

var app=express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride());
app.use(morgan('dev'));
app.use(favicon(__dirname + '../../public/assets/favicon.ico'));
app.use(express.static(__dirname+'../../public'));

app.use('/api', documentRouter);
app.use('/api', fandomsRouter);
app.use('/api', authRouter);

//app.use('/api', checkToken);
app.use(function(err, req, res, next){
    console.log('app.err');
    console.log(err);
    console.log(err);

    return res.json({success:false, error: err});
});

app.listen(config.get('port'), function(){
    'use strict';
    console.log('server is running on port ' + config.get('port'));
});

