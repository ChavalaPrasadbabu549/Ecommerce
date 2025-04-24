const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    picture: [{
        type: String,
        required: true
    }],
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        trim: true,
    },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true,
    },
    specifications: {
        type: mongoose.Schema.Types.Mixed
    },
    status: {
        type: Boolean,
        default: true, // Default status is active
    },

},
    {
        timestamps: true, // Adds createdAt and updatedAt fields
    }
);

// Create and export Product model
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
