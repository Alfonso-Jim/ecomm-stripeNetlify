const express = require('express');
const aboutTemplate = require('../views/about/index')

const router = express.Router();

router.get('/about', (req, res) => {
    res.send(aboutTemplate());
});

module.exports = router;