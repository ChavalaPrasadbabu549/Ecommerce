const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            enum: ['Electronics', 'Fashion', 'Home & Furniture', 'Appliances', 'Beauty & Personal Care', 'Sports & Fitness', 'Books', 'Grocery', 'Toys & Baby Products',],
            required: true, // Makes the name field mandatory
            trim: true, // Trims whitespace from the input
        },
        picture: {
            type: String, // URL or path to the category image
            required: true, // Optional field
        },
        status: {
            type: Boolean,
            default: true, // Default status is active
        },
        superadminId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Superadmin',  // Reference to Superadmin collection
            required: true
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields
    }
);

// Create and export Category model
const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
