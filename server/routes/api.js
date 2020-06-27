const router = require('express').Router();
const products = require('./api.products');

router.use('/products', products); 

module.exports = router;