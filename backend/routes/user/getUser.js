const User = require('../../models/User');
const {Router} = require('express');
const router = new Router();

router.get('/user', async (req, res) => {
    res.send(await User.findById(req.query.ID))
});

module.exports = router;
