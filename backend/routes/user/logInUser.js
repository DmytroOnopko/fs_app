const User = require('../../models/User.model');
const {Router} = require('express');
const router = new Router();
const jwt = require('jsonwebtoken');
const {secret} = require('../../secretKey');

router.post('/login', (req, res) => {

    res.set('Content-Type', 'application/json');

    const {email, password} = req.body;

    User.findOne({email}, (err, user) => {
        if (err) {
            console.error('1. Internal error: ', err);
            res.status(500)
                .json({
                    msg:
                        {
                            message: 'Please try again!',
                            name: 'Internal error'
                        }
                });
        } else if (!user) {
            console.error('2. Validation error email: ', user);
            res.status(400)
                .json({
                    msg:
                        {
                            message: 'Incorrect email. Please try again!',
                            name: 'Validation error email'
                        }
                });
        } else {
            user.isCorrectPassword(password, user.password, (err, same) => {
                if (err) {
                    console.log('3. Internal error',err);
                    res.status(500)
                        .json({
                            msg:
                                {
                                    message: 'Please try again!',
                                    name: 'Internal error'
                                }
                        });
                } else if (!same) {
                    console.log('4. Validation error password: ',same);
                    res.status(400)
                        .json({
                            msg:
                                {
                                    message: 'Incorrect password. Please try again!',
                                    name: 'Validation error password'
                                }
                        });
                } else{
                    // Issue token
                    console.log('5. userId: ',user._id);
                    const payload = {userId: user._id};
                    const token = jwt.sign(payload, secret, {expiresIn: '1h'});
                    res.status(200).json({token: token});
                }
            });
        }
    })
});

module.exports = router;