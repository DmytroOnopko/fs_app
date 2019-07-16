const User = require('../../models/User');
const {Router} = require('express');
const router = new Router();

router.get('/user', async (req, res) => {
    await User.findById(req.query.ID)
        .then(user => res.json(user))
});

module.exports = router;
