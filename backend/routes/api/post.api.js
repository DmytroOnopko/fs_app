const Post = require('../../models/Post.model');

exports.getPost = (req, res) => {
    Post.find({author: req.userId})
        .populate('author')
        .then(posts =>{
            console.log(posts);
            res.json(posts)
        })
};