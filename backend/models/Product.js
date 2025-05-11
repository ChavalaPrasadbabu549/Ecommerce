const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
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
    subsubcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubSubCategory',
        required: true
    },
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
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        trim: true,
    },
    specifications: {
        type: mongoose.Schema.Types.Mixed
    },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },

},
    {
        timestamps: true,
    }
);

// Create and export Product model
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
