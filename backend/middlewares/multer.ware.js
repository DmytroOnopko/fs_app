const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}_${Math.floor(Math.random()*10000)}${path.extname(file.originalname)}`)
    },
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype ==='image/png' || file.mimetype === "image/jpg"){
        cb(null, true);
    }else {
        cb(new Error('Error - type file'))
    }
};

const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter,
}).single('img_url');

module.exports = upload;

module.exports.default = module.exports;