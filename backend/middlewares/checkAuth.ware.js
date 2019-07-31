const jwt = require('jsonwebtoken');
const {secret} = require('../secretKey');

const checkAuth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
       if(req.path.match('login').length > 0) {
           next();
       } else {
           res.sendStatus(403);
       }
    } else {
        console.log('2:', token);
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                console.log('3:', err);
                res.status(401).json({
                    msg: {
                        message: 'Invalid token. Please try again!',
                        name: 'Unauthorized error token'
                    }
                });
            } else {
                req.userId = decoded.userId;
                console.log('4:', req.userId);
                next();
            }
        });
    }
};
module.exports = checkAuth;