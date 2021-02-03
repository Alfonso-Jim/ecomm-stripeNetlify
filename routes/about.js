const express = require('express');
const cancelPaymentTemplate = require('../views/about/index')

const router = express.Router();

router.get('/about', (req, res) => {
    res.send(cancelPaymentTemplate());
});

module.exports = router;