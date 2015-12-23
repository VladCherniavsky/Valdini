/**
 * Created by vlad.cherniavsky on 18.12.2015.
 */

var express=require('express'),
	db=require('./libs/mongoose'),
	passport = require('passport');

var app=express();
app.use(express.static(__dirname+'../../public'));

app.get('/', function(req,res){
	res.send("Hello from app.js");
});




app.listen(3000, function(){
	console.log("server is running on port 3000");
});


