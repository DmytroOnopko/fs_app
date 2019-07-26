const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UsersSchema = new mongoose.Schema({
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

UsersSchema.pre('save', function(next) {
    // Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
        // Saving reference to this because of changing scopes
        const document = this;
        bcrypt.hash(document.password, 10,
            function(err, hashedPassword) {
                if (err) {
                    next(err);
                }
                else {
                    document.password = hashedPassword;
                    next();
                }
            });
    } else {
        next();
    }
});

UsersSchema.methods.isCorrectPassword = (reqBodyPass, passFromDb, callback) =>{
    bcrypt.compare(reqBodyPass, passFromDb, (err, same) => {
        if (err) callback(err);
        else callback(err, same);
    });
};

const UserModel = mongoose.model('Users', UsersSchema);

module.exports = UserModel;