const Grocery = require('../models/Grocery');
const multer = require('multer');


// Configure multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage }).array('picture');

const GroceryController = {
    //createProduct
    async createProduct(req, res) {
        const vendorId = req.user.id;
        const {
            name, price, categoryId, subcategoryId, subsubcategoryId,
            description, brand, quantity, packOf, containerType,
            foodPreference, shelfLife, manufacturingDate, expiryDate,
            ingredients, nutritionalInfo
        } = req.body;
        try {

            // Validate required fields
            if (!name || !price || !categoryId || !subcategoryId || !subsubcategoryId || !description || !brand) {
                return res.status(400).json({ success: false, message: 'All required fields must be filled' });
            }

            // Handling file upload (assuming multiple images)
            const pictures = req.files ? req.files.map(file => file.filename) : [];

            let parsedNutritionalInfo = {};
            if (typeof nutritionalInfo === "string") {
                try {
                    parsedNutritionalInfo = JSON.parse(nutritionalInfo);
                } catch (error) {
                    return res.status(400).json({ success: false, message: "Invalid nutritionalInfo format. Must be JSON." });
                }
            }

            const newProduct = new Grocery({
                name,
                price,
                categoryId,
                subcategoryId,
                subsubcategoryId,
                description,
                picture: pictures,
                brand,
                quantity,
                packOf,
                containerType,
                foodPreference,
                shelfLife,
                manufacturingDate,
                expiryDate,
                ingredients,
                nutritionalInfo: parsedNutritionalInfo,
                vendorId
            });

            await newProduct.save();
            return res.status(201).json({ success: true, message: 'Grocery product created successfully', data: newProduct });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
        /**
      #swagger.tags = ['Grocery']
      #swagger.description = 'Create a new grocery product with images and additional nutritional and packaging details.'
      #swagger.autoBody = false
      #swagger.consumes = ['multipart/form-data']
      #swagger.parameters['name'] = {in: 'formData',type: 'string',required: true,description: 'Name of the product'}
      #swagger.parameters['price'] = {in: 'formData',type: 'number',required: true,description: 'Price of the product'}
      #swagger.parameters['categoryId'] = {in: 'formData',type: 'string',required: true,description: 'Category ID reference'}
      #swagger.parameters['subcategoryId'] = {in: 'formData',type: 'string',required: true,description: 'Subcategory ID reference'}
      #swagger.parameters['subsubcategoryId'] = {in: 'formData',type: 'string',required: true,description: 'Sub-subcategory ID reference'}
      #swagger.parameters['description'] = {in: 'formData',type: 'string',required: true,description: 'Description of the product'}
      #swagger.parameters['brand'] = {in: 'formData',type: 'string',required: true,description: 'Brand of the product'}
      #swagger.parameters['quantity'] = {in: 'formData',type: 'string',required: true,description: 'Quantity (e.g., 1kg, 500g)'}
      #swagger.parameters['packOf'] = {in: 'formData',type: 'string',required: false,description: 'Pack size (e.g., Pack of 2, Pack of 6)'}
      #swagger.parameters['containerType'] = {in: 'formData',type: 'string',required: false,description: 'Type of container (e.g., Box, Bottle, Pouch)'}
      #swagger.parameters['foodPreference'] = {in: 'formData',type: 'string',required: false,description: 'Food preference (e.g., Vegetarian, Non-Vegetarian, Vegan)'}
      #swagger.parameters['shelfLife'] = {in: 'formData',type: 'string',required: false,description: 'Shelf life of the product (e.g., 6 months)'}
      #swagger.parameters['manufacturingDate'] = {in: 'formData',type: 'string',required: false,description: 'Manufacturing date (YYYY-MM-DD)'}
      #swagger.parameters['expiryDate'] = {in: 'formData',type: 'string',required: false,description: 'Expiry date (YYYY-MM-DD)'}
      #swagger.parameters['ingredients'] = {in: 'formData',type: 'string',required: false,description: 'Comma-separated list of ingredients'}
      #swagger.parameters['nutritionalInfo'] = {in: 'formData',type: 'string',required: true,description: 'JSON string containing nutritional info.'}
      #swagger.parameters['picture'] = {in: 'formData',type: 'file',required: true,description: 'Upload one or multiple images',accept: 'image/jpeg, image/png'}
     */
    },
};


module.exports = {
    createProduct: GroceryController.createProduct,
    upload,
};

