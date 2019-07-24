const User = require('../../models/User.model');
const {Router} = require('express');
const router = new Router();
const jwt = require('jsonwebtoken');
const {secret} = require('../../secretKey');
const checkAuth = require('../../middlewares/checkAuth.ware');


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
                    const payload = {email};
                    const token = jwt.sign(payload, secret, {expiresIn: '1h'});
                    res.cookie('token', token, {httpOnly: true})
                        .sendStatus(200);
                }
            });
        }

        // if(!user){
        //     console.error(`[ ERROR ] - USER NOT FOUND:\n[request_email: ${req.body.email}] is not found`);
        //     return res.status(500).json({
        //         msg:
        //             {
        //                 message:`User with email address: \n${req.body.email}\n not found`,
        //                 name: 'ValidationErrorEmail'
        //             }
        //     });
        // }else if(user.email === req.body.email && user.password === req.body.password){
        //     console.log('[ SUCCESS ] - USER FOUND:\n', user);
        //     res.status(200).json(user);
        // }else {
        //     console.log(`[ ERROR ] - YOUR EMAIL OR PASSWORD IS WRONG:\n ${err}`);
        //     res.status(400).json({
        //         msg:
        //             {
        //                 message:`Your email or password is wrong. Please try again.`,
        //                 name: 'ValidationError'
        //             }
        //     });
        // }
    })
});

module.exports = router;