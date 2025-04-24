const Product = require('../models/Product');
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

const ProductController = {
    // Create Product
    async createProduct(req, res) {
        try {
            const vendorId = req.user.id; // Extract vendor ID from the authenticated user
            const { name, price, categoryId, subcategoryId, subsubcategoryId, description, brand, } = req.body;

            // Validate required fields
            if (!name || !price || !categoryId || !subcategoryId || !subsubcategoryId || !description || !brand) {
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

            const newProduct = new Product({
                name,
                price,
                categoryId,
                subcategoryId,
                subsubcategoryId,
                description,
                picture: pictures,
                brand,
                specifications: parsedSpecifications,
                vendorId,
            });

            await newProduct.save();
            return res.status(201).json({ success: true, message: 'Product created successfully', data: newProduct });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
        /**
       #swagger.tags = ['Product']
       #swagger.description = 'Create a new  product with images, brand, specifications, and other details.'
       #swagger.autoBody = false
       #swagger.consumes = ['multipart/form-data']
       #swagger.parameters['picture'] = { in: 'formData', type: 'file', required: true, accept: 'image/jpeg, image/png' }
       #swagger.parameters['name'] = { in: 'formData', type: 'string', required: true }
       #swagger.parameters['price'] = { in: 'formData', type: 'number', required: true }
       #swagger.parameters['description'] = { in: 'formData', type: 'string', required: true }
       #swagger.parameters['categoryId'] = { in: 'formData', type: 'string', required: true, description: 'Category ID reference' }
       #swagger.parameters['subcategoryId'] = { in: 'formData', type: 'string', required: true, description: 'Subcategory ID reference' }
       #swagger.parameters['subsubcategoryId'] = { in: 'formData', type: 'string', required: true, description: 'sub subcategory ID reference' }
       #swagger.parameters['specifications'] = { in: 'formData', type: 'string', required: true, description: 'JSON string containing specifications.' }
      */
    },

    // Update Product
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
    createProduct: ProductController.createProduct,
    // GetAllProduct: ProductController.GetAllProduct,
    // updateProduct: ProductController.updateProduct,
    // getProductById: ProductController.getProductById,
    upload,
};