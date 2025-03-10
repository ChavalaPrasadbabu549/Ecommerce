const mongoose = require('mongoose');

const fashionSchema = new mongoose.Schema({
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

    picture: {
        type: [{ type: String }],
        required: true
    },
    size: {
        type: String,
        enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        required: true
    },
    color: {
        type: String,
        required: true
    },
    material: {
        type: String
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Unisex'],
        required: true
    },
    brand: {
        type: String,
        enum: [
            'Nike', 'Adidas', 'Puma', 'U.S. Polo Assn.', 'Levi’s', 'Jack & Jones', 'Raymond', 'Allen Solly', 'Peter England', 'Roadster',
            'Biba', 'W for Woman', 'Fabindia', 'Aurelia', 'Global Desi', 'Vero Moda', 'Forever 21', 'ONLY', 'H&M', 'Zara',
            'Under Armour', 'Reebok', 'Superdry', 'Fila', 'Columbia'
        ],
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

const Fashion = mongoose.model('Fashion', fashionSchema);

module.exports = Fashion;
