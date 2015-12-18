/**
 * Created by vlad.cherniavsky on 18.12.2015.
 */

var  express = require('express');

var app=express();


app.get('/', function(req,res){
    res.send("Hello");
});

app.listen(3000,function(){
    console.log('app is running on port 3000');
});