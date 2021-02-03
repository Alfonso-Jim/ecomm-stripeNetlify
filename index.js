const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products')
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');
const cancelPaymentsRouter = require('./routes/cancel');
const successPaymentRouter = require('./routes/success');
const aboutRouter = require('./routes/about');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ['somesoopersoupencryptiondiagram']
}));
app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);
app.use(cartsRouter);
app.use(cancelPaymentsRouter);
app.use(successPaymentRouter);
app.use(aboutRouter);

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('listening');
}); 