const User = require('../../models/User');
const {Router} = require('express');
const router = new Router();

router.post('/login', (req, res) => {
    res.set('Content-Type', 'application/json');

    User.findOne({email: req.body.email}, (err, user) =>{

        if(!user){
            console.error(`[ ERROR ] - USER NOT FOUND:\n[request_email: ${req.body.email}] is not found`);
            return res.status(500).json({
                msg:
                    {
                        message:`User with email address: \n${req.body.email}\n not found`,
                        name: 'ValidationErrorEmail'
                    }
            });
        }else if(user.email === req.body.email && user.password === req.body.password){
            console.log('[ SUCCESS ] - USER FOUND:\n', user);
            res.status(200).json(user);
        }else {
            console.log(`[ ERROR ] - YOUR EMAIL OR PASSWORD IS WRONG:\n ${err}`);
            res.status(400).json({
                msg:
                    {
                        message:`Your email or password is wrong. Please try again.`,
                        name: 'ValidationError'
                    }
            });
        }
    })
});

module.exports = router;