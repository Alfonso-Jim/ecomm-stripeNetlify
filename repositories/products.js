const router = require('../routes/admin/auth');
const Repository = require('./repository');

class ProuctsRepository extends Repository{}

module.exports = new ProuctsRepository('products.json');