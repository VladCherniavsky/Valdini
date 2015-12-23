/**
 * Created by vlad.cherniavsky on 18.12.2015.
 */

var express     =require('express'),
	db          =require('./lib/mongoose'),
	passport    =require('passport'),
	bodyParser  =require('body-parser'),
	morgan      =require('morgan'),
	jwt 		=require('jsonwebtoken'),
	config 		=require('./config/config'),
	User 		=require('./models/userModel');



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
	User.find({},function(err,users){
		res.json(users);
	});
});
app.use('/api',apiRoutes);

app.get('/', function(req,res){
	res.send("Hello from app.js");
});

app.get('/setup', function(req,res){
	var vlad = new  User({
		username: vlad,
		password: vlad,
		admin:true
	});
	vlad.save(function(err){
		if(err) throw err;

		console.log('User saves successfully');
		res.json({success:true});
	});
});





app.listen(3000, function(){
	console.log("server is running on port 3000");
});


