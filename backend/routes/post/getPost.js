const Post = require('../../models/Post');
const {Router} = require('express');
const router = new Router();

router.get('/post', (req, res) => {
    Post.find((err, data) => {
        console.log(data);
        if (err) return res.json({ success: false, error: err});
        return res.json({ success: true, post: data});
    })
});

module.exports = router;