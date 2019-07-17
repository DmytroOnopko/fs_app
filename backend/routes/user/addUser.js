const User = require('../../models/User');
const {Router} = require('express');
const router = new Router();
const path = require('path');
const multerWare = require('../../middlewares/multer.ware');

router.post('/user', multerWare, (req, res) => {
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
});

module.exports = router;
