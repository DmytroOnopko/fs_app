const Post = require('../../models/Post.model');
const {Router} = require('express');
const router = new Router();
const checkAuth = require('../../middlewares/checkAuth.ware');

router.get('/post', checkAuth, (req, res) => {
    Post.find({author: req.userId})
        .populate('author')
        .then(posts =>{
            res.json( { status:200, posts } )
        })
});

module.exports = router;