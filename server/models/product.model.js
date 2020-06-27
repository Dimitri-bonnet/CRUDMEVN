const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
    img : String,
    title : String,
    price : Number
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;