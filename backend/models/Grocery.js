const mongoose = require("mongoose");

const grocerySchema = mongoose.Schema({
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
    subsubcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubSubCategory',
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
    quantity: {
        type: String,
        required: true
    },
    packOf: {
        type: Number,
        default: 1
    },
    containerType: {
        type: String,
    },
    foodPreference: {
        type: String,
        enum: ['Vegetarian', 'Non-Vegetarian', 'Vegan'],
    },
    shelfLife: {
        type: String, 
    },
    manufacturingDate: {
        type: Date,
    },
    expiryDate: {
        type: Date,
    },
    description: {
        type: String
    },
    ingredients: {
        type: String
    },
    nutritionalInfo: {
        type: mongoose.Schema.Types.Mixed 
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

const Grocery = mongoose.model("Grocery", grocerySchema);
module.exports = Grocery;
