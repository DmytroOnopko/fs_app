const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name:              { type: String, required: true },
    surname:           { type: String, required: true },
    email:             { type: String, required: true, unique: true },
    login:             { type: String },
    password:          { type: String, required: true },
    img_url:           { type: String },
    subscribers_id:   [{ type: mongoose.Schema.Types.ObjectId }],
    subscribed_to_id: [{ type: mongoose.Schema.Types.ObjectId }],
    posts:            [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts'}]
});

const User = mongoose.model('Users', usersSchema);

module.exports = User;