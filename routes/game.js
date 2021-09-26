const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    try {
        return res.render('game');

    } catch (err) {
        console.log(err);
    }
});

module.exports = router;