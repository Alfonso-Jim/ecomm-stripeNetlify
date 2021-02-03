const stripe = require('stripe')('sk_test_51IEv7wBxCo0Ef9k2n8sVlIM98PkFqDz2bcYa3XcEluPZO6v2fQc8kQ3IkNK7eAyTw9wwFKWpt2peo5aqTCNkHr3200PYH561rf');
const cookieSession = require('cookie-session');
const express = require('express');
const cartsRepo = require('../repositories/carts');
const productsRepo = require('../repositories/products');
const cartShowTemplate = require('../views/carts/show');

const router = express.Router();

// Receive POST req to add item to a cart
router.post('/cart/products', async (req, res) => {
    // Figure out the cart :p
    let cart;
    if (!req.session.cartId) {
        // We don't have a cart, we need to create one
        // and store the cart id on the req.session.cartId prop
        cart = await cartsRepo.create({ items: [] });
        req.session.cartId = cart.id;
    } else {
        // We have a cart! lets get it from the repo
        cart = await cartsRepo.getOne(req.session.cartId);
    }

    const existingItem = cart.items.find(item => item.id === req.body.productId);
    if (existingItem) {
        // increment quantity and save cart
        existingItem.quantity++;
    } else {
        // add new product id to items array
        cart.items.push({ id: req.body.productId, quantity: 1 });
    }

    await cartsRepo.update(cart.id, {
        items: cart.items
    });

    res.redirect('/cart');
});

// Receieve GET req to show all items in cart
router.get('/cart', async (req, res) => {
    if (!req.session.cartId) {
        return res.redirect('/');
    }

    const cart = await cartsRepo.getOne(req.session.cartId);

    for (let item of cart.items){
        // item === { id: , quantity}
        const product = await productsRepo.getOne(item.id);

        item.product = product;
    }

    res.send(cartShowTemplate({ items: cart.items }));
});

// Receive a POST req to delete an item from a cart
router.post('/cart/products/delete', async (req,res) => {
    const { itemId } = req.body;
    const cart = await cartsRepo.getOne(req.session.cartId);

    const items  = cart.items.filter(item => item.id !== itemId);

    await cartsRepo.update(req.session.cartId, {items});

    res.redirect('/cart');
});

router.post('/cart/products/buy', async (req, res) => {
    const cart = await cartsRepo.getOne(req.session.cartId);
    const items = cart.items;
    for (let item of cart.items){
        // item === { id: , quantity}
        const product = await productsRepo.getOne(item.id);

        item.product = product;
    }

    let totalPrice = items.reduce((prev, item) => {
        return prev + item.quantity * item.product.price;
    }, 0);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Poncho Store Payment',
              images: ['https://alfonso-dev.com/wp-content/uploads/2020/09/pj.png'],
            },
            unit_amount: totalPrice.toFixed(2) * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/cancel`,
    });
    res.json({ id: session.id });
});

module.exports = router;