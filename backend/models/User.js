const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name:              { type: String, required: true },
    surname:           { type: String, required: true },
    email:             { type: String, required: true, unique: true },
    login:             { type: String, required: true, unique: true },
    password:          { type: String, required: true },
    img_url:           { type: String },
    subscribers_id:   [{ type: mongoose.Schema.Types.ObjectId }],
    subscribed_to_id: [{ type: mongoose.Schema.Types.ObjectId }],
    posts:            [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts'}]
});

const User = mongoose.model('Users', usersSchema);

// User.create({
//     name: "Dima",
//     surname: "Onopko",
//     login: "DimaOnopko123",
//     password: "123",
//     img_url: "https://scontent.fiev17-2.fna.fbcdn.net/v/t1.0-9/24909955_1506823002741368_3989788631726486349_n.jpg?_nc_cat=111&_nc_oc=AQkGWUREIloRWCNKr6STXkMQWSAn1nuCN7o6MVefLfbyeiuDQBeUOgzhPr5wmqVMTjE&_nc_ht=scontent.fiev17-2.fna&oh=24d2041a9b5665efeda900fbd17e6c3f&oe=5D7A6008",
//     subscribers_id: [],
//     subscribed_to_id: [],
//     posts: []
// });
//
// User.create({
//     name: "Nazar",
//     surname: "Denysiak",
//     login: "NazDen123",
//     password: "123",
//     img_url: "https://scontent.fiev17-1.fna.fbcdn.net/v/t1.0-9/47352436_10213266863531032_7353270137178292224_n.jpg?_nc_cat=109&_nc_oc=AQmn1zU7KDYq59o0St4KgI55p9yaomQ4BTigvhRp6obF2i1tS8jWzaF-II7Ro5NmFIw&_nc_ht=scontent.fiev17-1.fna&oh=9de9c29f5345c840bfea0810a746eba4&oe=5DB6F70C",
//     subscribers_id: [],
//     subscribed_to_id: [],
//     posts: []
// });
//
// User.create({
//     name: "Vlad",
//     surname: "Letun",
//     login: "VladLetun123",
//     password: "123",
//     img_url: "https://scontent.fiev17-1.fna.fbcdn.net/v/t1.0-9/19225064_1066891053455979_9150846642471295693_n.jpg?_nc_cat=109&_nc_oc=AQnmu46EaJDXrtglsx3_kW5JrGkvKS-CBwQ9VC7NnW0Yf6fRpsk-ZhBjgEQJ_glzv94&_nc_ht=scontent.fiev17-1.fna&oh=1e02d44ec9ac293d3657314b4f472286&oe=5D8ABF50",
//     subscribers_id: [],
//     subscribed_to_id: [],
//     posts: []
// });

module.exports = User;