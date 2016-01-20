var jwt = require('jsonwebtoken');

exports.checkToken = function (req, res) {
    console.log('checktoken request');
    console.log(req.body);
    var token = req.body.token;

    if (token) {
        jwt.verify(token, 'vlados', function (err, decoded) {
            if( err) {
                console.log('err');
                console.log(err);
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token',
                    error: err
                });
            } else {
                console.log(decoded);
                console.log('decoded');
                req.decoded = decoded;
                return res.json({
                    success: true,
                    message: 'token is valid',
                    info: decoded
                });
            }

        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'no token provided'
        });
    }
};