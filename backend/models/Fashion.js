const mongoose = require('mongoose');

const fashionSchema = mongoose.Schema(
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
        subsubcategoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubSubCatgory',
            required: true
        },
        vendorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vendor',
            required: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true
        },
        picture: {
            type: [{ type: String }],
            required: true
        },
        size: {
            type: String,
            // enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            required: true
        },
        brand: {
            type: String,
            required: true,
            trim: true, // Trims whitespace from the input
        },
        description: {
            type: String,
            required: false,
            trim: true, // Trims whitespace from the input
        },
        specifications: {
            type: [{ key: String, value: String }], // Array of objects with 'key' and 'value'
            default: [] // Default empty array
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

const Fashion = mongoose.model('Fashion', fashionSchema);

module.exports = Fashion;
