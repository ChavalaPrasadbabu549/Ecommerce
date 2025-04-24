const Electronics = require('../models/Electronics');
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

const ElectronicsController = {
    //createProduct
    async createProduct(req, res) {
        const vendorId = req.user.id;
        const { name, price, categoryId, subcategoryId, subsubcategoryId, description, brand, model, specifications, warranty } = req.body;
        try {

            // Validate required fields
            if (!name || !price || !categoryId || !subcategoryId || !subsubcategoryId || !description || !brand || !model || !warranty) {
                return res.status(400).json({ success: false, message: 'All required fields must be filled' });
            }

            // Handling file upload (assuming multiple images)
            const pictures = req.files ? req.files.map(file => file.filename) : [];

            let parsedSpecifications = [];
            if (typeof specifications === "string") {
                try {
                    parsedSpecifications = JSON.parse(specifications);
                } catch (error) {
                    return res.status(400).json({ success: false, message: "Invalid specifications format. Must be JSON." });
                }
            }

            const newProduct = new Electronics({
                name,
                price,
                categoryId,
                subcategoryId,
                subsubcategoryId,
                description,
                picture: pictures,
                brand,
                model,
                specifications: parsedSpecifications,
                warranty,
                vendorId
            });

            await newProduct.save();
            return res.status(201).json({ success: true, message: 'Electronics Product created successfully', data: newProduct });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
        /**
       #swagger.tags = ['Electronics']
       #swagger.description = 'Create a new electronics product with images, brand, specifications, and other details.'
       #swagger.autoBody = false
       #swagger.consumes = ['multipart/form-data']
       #swagger.parameters['name'] = { in: 'formData', type: 'string', required: true, description: 'Name of the product' }
       #swagger.parameters['price'] = { in: 'formData', type: 'number', required: true, description: 'Price of the product' }
       #swagger.parameters['categoryId'] = { in: 'formData', type: 'string', required: true, description: 'Category ID reference' }
       #swagger.parameters['subcategoryId'] = { in: 'formData', type: 'string', required: true, description: 'Subcategory ID reference' }
       #swagger.parameters['subsubcategoryId'] = { in: 'formData', type: 'string', required: true, description: 'sub subcategory ID reference' }
       #swagger.parameters['description'] = { in: 'formData', type: 'string', required: true, description: 'Description of the product' }
       #swagger.parameters['brand'] = { in: 'formData', type: 'string', required: true, description: 'Brand of the product', enum: ['Apple', 'Samsung', 'Sony', 'LG', 'Dell', 'HP', 'Lenovo', 'Asus', 'Microsoft'] }
       #swagger.parameters['model'] = { in: 'formData', type: 'string', required: true, description: 'Model of the product' }
       #swagger.parameters['specifications'] = { in: 'formData', type: 'string', required: true, description: 'JSON string containing specifications.' }
       #swagger.parameters['warranty'] = { in: 'formData', type: 'string', required: false, description: 'Warranty period' }
       #swagger.parameters['picture'] = { in: 'formData', type: 'file', required: true, description: 'Upload one or multiple images', accept: 'image/jpeg, image/png' }
      */
    },
    //updateProduct
    async updateProduct(req, res) {
        try {
            const { productId } = req.body;
            const { name, price, description, brand, model, specifications, warranty } = req.body;

            // Find the product by ID
            const product = await Electronics.findById(productId);
            if (!product) {
                return res.status(404).json({ success: false, message: 'product not found' });
            }

            // Update fields only if they are provided
            if (name) product.name = name;
            if (price) product.price = price;
            if (description) product.description = description;
            if (brand) product.brand = brand;
            if (model) product.model = model;
            if (warranty) product.warranty = warranty;
            if (specifications) {
                product.specifications = typeof specifications === 'string' ? JSON.parse(specifications) : specifications;
            }
            // Handling file uploads (for multiple images)
            if (req.files && req.files.length > 0) {
                const pictures = req.files.map(file => file.filename);
                product.picture = pictures; // Only update if new images are provided
            }

            await product.save();

            return res.status(200).json({ success: true, message: 'product updated successfully', data: product });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }

        /**
     #swagger.tags = ['Electronics']
     #swagger.description = 'update a new electronics product with images, brand, specifications, and other details.'
     #swagger.autoBody = false
     #swagger.consumes = ['multipart/form-data']
     #swagger.parameters['productId'] = { in: 'formData', type: 'string', required: true, description: 'ID of the product to be updated' }
     #swagger.parameters['name'] = { in: 'formData', type: 'string', required: false, description: 'Name of the product' }
     #swagger.parameters['price'] = { in: 'formData', type: 'number', required: false, description: 'Price of the product' }
     #swagger.parameters['categoryId'] = { in: 'formData', type: 'string', required: false, description: 'Category ID reference' }
     #swagger.parameters['subcategoryId'] = { in: 'formData', type: 'string', required: false, description: 'Subcategory ID reference' }
     #swagger.parameters['subsubcategoryId'] = { in: 'formData', type: 'string', required: false, description: 'sub subcategory ID reference' }
     #swagger.parameters['description'] = { in: 'formData', type: 'string', required: false, description: 'Description of the product' }
     #swagger.parameters['brand'] = { in: 'formData', type: 'string', required: false, description: 'Brand of the product', enum: ['Apple', 'Samsung', 'Sony', 'LG', 'Dell', 'HP', 'Lenovo', 'Asus', 'Microsoft'] }
     #swagger.parameters['model'] = { in: 'formData', type: 'string', required: false, description: 'Model of the product' }
     #swagger.parameters['specifications'] = { in: 'formData', type: 'string', required: false, description: 'JSON string containing specifications.' }
     #swagger.parameters['warranty'] = { in: 'formData', type: 'string', required: false, description: 'Warranty period' }
     #swagger.parameters['picture'] = { in: 'formData', type: 'file', required: false, description: 'Upload one or multiple images', accept: 'image/jpeg, image/png' }
    */
    },

    // Get All Product API
    async GetAllProduct(req, res) {
        try {
            const userId = req.user.id;  // Extract user ID
            const userRole = req.user.role;  // Extract role
            let products;
            if (userRole === 'Superadmin') {
                products = await Electronics.find(); // Superadmin sees all products
            } else if (userRole === 'Vendor') {
                products = await Electronics.find({ vendorId: userId }); // Vendor sees only their products
            } else {
                return res.status(403).json({ success: false, message: 'Access Denied' });
            }
            return res.status(200).json({ success: true, data: products });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }

        /**
        #swagger.tags = ['Electronics']
        */
    },

    // Get Electronics Product by ID
    async getProductById(req, res) {
        try {
            const { productId } = req.params;

            if (!productId) {
                return res.status(400).json({ success: false, message: 'Product ID is required' });
            }

            // Find the product by ID
            const product = await Electronics.findById(productId);

            if (!product) {
                return res.status(404).json({ success: false, message: 'Product not found' });
            }

            return res.status(200).json({ success: true, message: 'Product details retrieved successfully', data: product });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
        /**
        #swagger.tags = ['Electronics']
       */
    },


};

module.exports = {
    createProduct: ElectronicsController.createProduct,
    updateProduct: ElectronicsController.updateProduct,
    GetAllProduct: ElectronicsController.GetAllProduct,
    getProductById: ElectronicsController.getProductById,
    upload,
};