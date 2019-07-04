const User = require('../../models/User');
const {Router} = require('express');
const router = new Router();

router.get('/user', async (req, res) => {
    // await Post.find((err, data) => {
    //     return res.json(data);
    // });
    res.send(await User.find())
});

module.exports = router;