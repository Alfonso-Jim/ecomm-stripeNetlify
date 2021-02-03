const express = require('express');
const cancelPaymentTemplate = require('../views/payments/cancel')

const router = express.Router();

router.get('/cancel', (req, res) => {
    res.send(cancelPaymentTemplate());
});

module.exports = router;