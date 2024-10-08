const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// @route   GET /api/products
// @desc    Get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
        console.log(products.title)
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
