const jwt = require('jsonwebtoken');
const {secret} = require('../secretKey');

const checkAuth = (req, res, next) => {
    const token = req.get('Authorization');
    if (!token) {
        console.log('1:', token);
        res.status(401).json({
            msg: {
                message: 'No token provided. Please try again!',
                name: 'Unauthorized error token'
            }
        });
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