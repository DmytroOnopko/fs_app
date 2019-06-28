const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user_id:     { type: mongoose.Schema.Types.ObjectId, required: true },
    img_urls:   [{ type: String, required: true }],
    description: { type: String, default:'' },
    like:        { type: Number, default:0 },
    date:        { type: Date, default: Date.now }
});

const Post = mongoose.model('Posts', postSchema);

// Posts.create({
//     user_id: mongoose.Types.ObjectId('5d121e5e1c9d440000e401ed'),
//     img_urls: 'http://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     like: 0,
//     date: 1561469073574
// });
//
// Posts.create({
//     user_id: mongoose.Types.ObjectId('5d121e5e1c9d440000e401ed'),
//     img_urls: 'https://assets.jpegmini.com/users/images/slider_puffin_jpegmini_mobile.jpg',
//     description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     like: 2,
//     date: 1561469309658
// });
//
// Posts.create({
//     user_id: mongoose.Types.ObjectId('5d121f291c9d440000644cb3'),
//     img_urls: 'https://www.saratogacasinobh.com/sysimg/visit-image-visit-menu-visit-image-image.jpg',
//     description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     like: 6,
//     date: 1561469404513
// });

module.exports = Post;


