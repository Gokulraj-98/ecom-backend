const mongoose = require('mongoose');

// Product Schema with updated fields
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountPercentage: {
        type: Number,
        required: true,
    },
    stockQuantity: {
        type: Number,
        required: true,
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand', // Reference to the Brand model
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
        required: true,
    }],
    isDeleted: {
        type: Boolean,
        default: false,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
