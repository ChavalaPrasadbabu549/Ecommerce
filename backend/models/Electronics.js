const mongoose = require('mongoose');

const electronicsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
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
    picture: [{
        type: String,
        required: true
    }], // Supports multiple images
    brand: {
        type: String,
        enum: [
            'Apple', 'Samsung', 'Sony', 'LG', 'Dell', 'HP', 'Lenovo', 'Asus',
            'Acer', 'Bose', 'JBL', 'Boat', 'Realme', 'OnePlus', 'Xiaomi'
        ],
        required: true
    },
    model: {
        type: String,
        required: true
    },
    specifications: {
        type: mongoose.Schema.Types.Mixed
    },
    warranty: {
        type: String,
        enum: ['6 Months', '1 Year', '2 Years', 'No Warranty'],
        required: true
    },
    description: {
        type: String
    },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true
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

const Electronics = mongoose.model('Electronics', electronicsSchema);
module.exports = Electronics;
