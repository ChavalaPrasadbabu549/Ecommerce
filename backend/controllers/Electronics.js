const Electronics = require('../models/Electronics'); // Import Electronics Model
const multer = require('multer');


// Configure multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the upload directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
    },
});

const upload = multer({
    storage,
});

const ElectronicsController = {
    // Create Product
    async createProduct(req, res) {
        const vendorId = req.user.id; // Extract vendor ID from the authenticated user
        const { name, price, categoryId, subcategoryId, description, brand, model, specifications, warranty } = req.body;
        try {


            // Validate required fields
            if (!name || !price || !categoryId || !subcategoryId || !description || !brand || !model || !specifications || !warranty) {
                return res.status(400).json({ success: false, message: 'All required fields must be filled' });
            }

            // Handling file upload (assuming multiple images)
            const picture = req.file ? req.file.map(file => file.filename) : [];

            // Convert specifications from string to JSON if needed
            const parsedSpecifications = typeof specifications === 'string' ? JSON.parse(specifications) : specifications;

            const newProduct = new Electronics({
                name,
                price,
                categoryId,
                subcategoryId,
                description,
                picture,
                brand,
                model,
                specifications: parsedSpecifications,  // Store as JSON
                warranty,
                vendorId
            });

            await newProduct.save();
            return res.status(201).json({ success: true, message: 'Product created successfully', data: newProduct });
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
       #swagger.parameters['description'] = { in: 'formData', type: 'string', required: true, description: 'Description of the product' }
       #swagger.parameters['brand'] = { in: 'formData', type: 'string', required: true, description: 'Brand of the product', enum: ['Apple', 'Samsung', 'Sony', 'LG', 'Dell', 'HP', 'Lenovo', 'Asus', 'Microsoft'] }
       #swagger.parameters['model'] = { in: 'formData', type: 'string', required: true, description: 'Model of the product' }
       #swagger.parameters['specifications'] = { in: 'formData', type: 'string', required: true, description: 'JSON string containing specifications.' }
       #swagger.parameters['warranty'] = { in: 'formData', type: 'string', required: false, description: 'Warranty period' }
       #swagger.parameters['vendorId'] = { in: 'formData', type: 'string', required: true, description: 'Vendor ID reference' }
       #swagger.parameters['picture'] = { in: 'formData', type: 'file', required: true, description: 'Upload one or multiple images', accept: 'image/jpeg, image/png' }
      */
    },

    // // Update Product
    // async updateProduct(req, res) {
    //     try {
    //         const { productId } = req.body; // product ID from path
    //         const { name, price, description } = req.body;

    //         // Find the product by ID
    //         const product = await Product.findById(productId);
    //         if (!product) {
    //             return res.status(404).json({ success: false, message: 'product not found' });
    //         }

    //         // Update fields only if they are provided
    //         if (name) product.name = name;
    //         if (price) product.price = price;
    //         if (description) product.description = description;
    //         if (req.file) { product.picture = req.file.filename }

    //         await product.save();

    //         return res.status(200).json({ success: true, message: 'product updated successfully', data: product });
    //     } catch (error) {
    //         return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    //     }

    //     /**
    //     #swagger.tags = ['Product']
    //     #swagger.autoBody = false
    //     #swagger.consumes = ['multipart/form-data']
    //     #swagger.parameters['productId'] = { in: 'formData', type: 'string', required: true },
    //     #swagger.parameters['picture'] = { in: 'formData', type: 'file', required: false, accept: 'image/jpeg, image/png'},
    //     #swagger.parameters['name'] = { in: 'formData', type: 'string', required: false },
    //     #swagger.parameters['description'] = { in: 'formData', type: 'string', required: false },
    //     #swagger.parameters['price'] = { in: 'formData', type: 'string', required: false },
    //     #swagger.parameters['categoryId'] = { in: 'formData', type: 'string', required: false },
    //     #swagger.parameters['subcategoryId'] = { in: 'formData', type: 'string', required: false }
    //     */
    // },

    // Get All Product API
    // async GetAllProduct(req, res) {
    //     try {
    //         const userId = req.user.id;  // Extract user ID
    //         const userRole = req.user.role;  // Extract role
    //         let products;
    //         if (userRole === 'Superadmin') {
    //             products = await Product.find(); // Superadmin sees all products
    //         } else if (userRole === 'Vendor') {
    //             products = await Product.find({ vendorId: userId }); // Vendor sees only their products
    //         } else {
    //             return res.status(403).json({ success: false, message: 'Access Denied' });
    //         }

    //         return res.status(200).json({ success: true, data: products });
    //     } catch (error) {
    //         return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    //     }

    //     /**
    //     #swagger.tags = ['Product']
    //     */
    // },

    // async getProductById(req, res) {
    //     try {
    //         const { productId } = req.params;

    //         if (!productId) {
    //             return res.status(400).json({ success: false, message: 'Product ID is required' });
    //         }

    //         // Find the product by ID
    //         const product = await Product.findById(productId);

    //         if (!product) {
    //             return res.status(404).json({ success: false, message: 'Product not found' });
    //         }

    //         return res.status(200).json({ success: true, message: 'Product details retrieved successfully', data: product });
    //     } catch (error) {
    //         return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    //     }
    //     /**
    //     #swagger.tags = ['Product']
    //    */
    // },


};

module.exports = {
    createProduct: ElectronicsController.createProduct,
    // GetAllProduct: ProductController.GetAllProduct,
    // updateProduct: ProductController.updateProduct,
    // getProductById: ProductController.getProductById,
    upload,
};