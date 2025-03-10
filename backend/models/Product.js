const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
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
        vendorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vendor', // Reference the Vendors model
            required: true,
        },
        name: {
            type: String,
            required: true, // Makes the name field mandatory
            trim: true, // Trims whitespace from the input
        },
        price: {
            type: Number,
            required: true
        },
        picture: {
            type: [{ type: String }],
            required: true, // Optional field
        },
        brand: {
            type: String,
            enum: [
                'Apple', 'Samsung', 'Sony', 'LG', 'Dell', 'HP', 'Lenovo', 'Asus',
                'Acer', 'Bose', 'JBL', 'Boat', 'Realme', 'OnePlus', 'Xiaomi'
            ],
            required: true
        },
        description: {
            type: String,
            required: false,
            trim: true, // Trims whitespace from the input
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
