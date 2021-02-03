const express = require('express');
const successPaymentTemplate = require('../views/payments/success')
const cartsRepo = require('../repositories/carts');

const router = express.Router();

router.get('/success', async(req, res) => {
    const cart = await cartsRepo.getOne(req.session.cartId);

    await cartsRepo.update(cart.id, {
        items: []
    });

    res.send(successPaymentTemplate());
});

module.exports = router;