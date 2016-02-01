
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


var authRouter = require('./routes/user');
var fandomsRouter = require('./routes/fandomsRouter');

var app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));
app.use(favicon(__dirname + '../../public/assets/favicon.ico'));
app.use(express.static(__dirname+'../../public'));


app.use('/api', fandomsRouter);
authRouter.use(checkTokenRoute);
//userRouter.use(checkToken);

app.use('/api', authRouter);
app.use(function(err, req, res, next){
    console.log('app.err');
    console.log(err);
    if(err.name === 'ValidationError'){
        err.status = 422;
    }
    log.error('%s %d %s', req.method, err.status ? err.status : req.statusCode, err.message);
    return res.status(err.status ? err.status : 500).json({nameError: err.name, messageError: err.message ? err.message : 'Error', validationError: err.errors,
        "growlMessages":[{"text": err.message, "tittle": err.name}]});
});

app.listen(3000, function(){
    'use strict';
    console.log('server is running on port 3000');
});

