const {Router} = require('express');
const router = new Router();
const { getPost } = require('./post.api');
const { addUser, getUser, login, checkToken } = require('./user.api');
const multerWare = require('../../middlewares/multer.ware');

router.get('/post', getPost);

router.post('/login', login);

router.get('/user', getUser);
router.post('/user/register', multerWare, addUser);
router.post('/user/check-token', checkToken);

module.exports = router;
module.exports.default = router;
