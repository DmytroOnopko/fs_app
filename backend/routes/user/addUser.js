const User = require('../../models/User');
const {Router} = require('express');
const router = new Router();

router.post('/user', async (req, res) => {
    res.setHeader('Content-Type','application/json');

    const newUser = new User({
        name:             req.body.user.name,
        surname:          req.body.user.surname,
        email:            req.body.user.email,
        login:            req.body.user.login,
        password:         req.body.user.password,
        img_url:          '',
        subscribers_id:   [],
        subscribed_to_id: [],
        posts:            []
    });

    await User
        .findOne({ email: req.body.user.email },(err, data) => {
            // console.log('req.body.user.email',req.body.user.email);
            // console.log('data',data);
            if(err){
                console.error('[ ERROR ] \n', err);
                return res.status(400).json({msg: err});
            }else if(data === null){
                newUser
                    .save((err, user) => {
                        if(err){
                            console.error('[ ERROR ] \n', err);
                            return res.status(400).json({msg: err});
                        }
                        console.log('[ SUCCESS ] - USER ADD:\n', user);
                        res.status(200).json(user);
                    })
            }else if(data.email === req.body.user.email){
                console.error(`[ ERROR ] - USER IS EXIST:\n[request_email: ${req.body.user.email}] is equal [email_from_db: ${data.email}]`);
                return res.status(500).json({msg: err});
            }

        })

});

module.exports = router;