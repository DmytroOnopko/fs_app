const jwt = require('jsonwebtoken');
const {secret} = require('../secretKey');

const checkAuth = (req, res, next) => {
    const token = req.get('Authorization');
    if (!token) {
        res.status(401).json({
            msg: {
                message: 'No token provided. Please try again!',
                name: 'Unauthorized error token'
            }
        });
    } else {
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                res.status(401).json({
                    msg: {
                        message: 'Invalid token. Please try again!',
                        name: 'Unauthorized error token'
                    }
                });
            } else {
                req.userId = decoded.userId;
                next();
            }
        });
    }
};
module.exports = checkAuth;