const Post = require('../../models/Post');
const {Router} = require('express');
const router = new Router();

router.get('/post', async (req, res) => {
    await Post.find({})
        .populate('author')
        .then(posts => res.json(posts))
});

module.exports = router;