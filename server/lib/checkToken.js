 var jwt = require('jsonwebtoken');

module.exports=function(req,res,next){
    console.log('checktoken middlaware');
    console.log(req.cookies);
    
    var token = req.body.token ||req.query.token || req.headers['x-access-token'] || req.cookies.token;
    if(token){
        jwt.verify(token,'vlados',function(err,decoded){
            if(err){
                console.log(err);

                return res.json({
                    success:false,
                    message:'Failed to authenticate token',
                    error:err
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
};