const User = require('../../models/User.model');
const path = require('path');
const jwt = require('jsonwebtoken');
const {secret} = require('../../secretKey');

exports.addUser = (req, res) => {
    res.set('Content-Type', 'application/json');
    User.findOne({email: req.body.email}, (err, user) => {
        if (!user) {
            const newUser = new User({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                login: `${req.body.name}_${req.body.surname}`.toLowerCase(),
                password: req.body.password,
                img_url: req.file.path,
                subscribers_id: [],
                subscribed_to_id: [],
                posts: []
            });
            newUser.save((err, user) => {
                if (err) {
                    console.error('[ ERROR ] \n', err);
                    return res.status(400).json({msg: err});
                }
                console.log('[ SUCCESS ] - USER ADD:\n', user);
                res.status(200).json(user);
            })
        }
        else if (user.email === req.body.email) {
            console.error(`[ ERROR ] - USER IS EXIST:\n[request_email: ${req.body.email}] is equal [email_from_db: ${user.email}]`);
            return res.status(500).json({
                msg:
                    {
                        message:`User with email address: \n${req.body.email}\n already exists `,
                        name: 'ValidationErrorEmail'
                    }
            });
        } else {
            console.error('[ ERROR ] \n', err);
            return res.status(400).json({msg: err});
        }
    })
};

exports.getUser = (req, res) => {
    User.findById(req.query.ID)
        .then(user => res.json(user))
};

exports.login = (req, res) => {

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
                    console.log('5. userId: ',user._id);
                    const payload = {userId: user._id};
                    const token = jwt.sign(payload, secret, {expiresIn: '1h'});
                    res.cookie('token', token, {'httpOnly': true });
                    res.status(200).end('OK');
                }
            });
        }
    })
};

exports.checkToken = (req, res) => {
    if(req.userId){
        res.sendStatus(200)
    }else {
        res.sendStatus(403)
    }
};
