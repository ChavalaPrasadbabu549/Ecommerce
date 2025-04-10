const mongoose = require('mongoose');

const SubSubCatgorySchema = mongoose.Schema(
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
        name: {
            type: String,
            required: true,
            trim: true
        },
        picture: {
            type: String, // URL or path to the category image
            required: true, // Optional field
        },
        status: {
            type: Boolean,
            default: true, // Default status is active
        },
    },
    {
        timestamps: true
    }
);

const SubSubCatgory = mongoose.model('SubSubCatgory', SubSubCatgorySchema);
module.exports = SubSubCatgory;
