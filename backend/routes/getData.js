const Data = require('../models/data');
const {Router} = require('express');
const router = new Router();

// this is our get method
// this method fetches all available data in our database
router.get('/getData', (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

module.exports = router;
