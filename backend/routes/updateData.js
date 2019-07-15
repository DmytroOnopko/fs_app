const Data = require('../models/data');
const {Router} = require('express');
const router = new Router();

// this is our update method
// this method overwrites existing data in our database
router.put('/updateData', (req, res) => {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

module.exports = router;
