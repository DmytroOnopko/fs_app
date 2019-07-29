const Post = require('../../models/Post.model');
const {Router} = require('express');
const router = new Router();
const checkAuth = require('../../middlewares/checkAuth.ware');
const jwt = require('jsonwebtoken');
const {secret} = require('../../secretKey');

router.get('/post', checkAuth, (req, res) => {
    Post.find({author: req.userId})
        .populate('author')
        .then(posts =>{
            console.log(posts);
            res.json(posts)
        })
});

module.exports = router;