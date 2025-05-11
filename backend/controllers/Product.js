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
            const vendorId = req.user.id;
            const { name, price, categoryId, subcategoryId, subsubcategoryId, description, brand, specifications } = req.body;

            // Validate required fields
            if (!name || !price || !categoryId || !subcategoryId || !subsubcategoryId || !description || !brand || !specifications) {
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
       #swagger.parameters['categoryId'] = { in: 'formData', type: 'string', required: true, description: 'Category ID reference' }
       #swagger.parameters['subcategoryId'] = { in: 'formData', type: 'string', required: true, description: 'Subcategory ID reference' }
       #swagger.parameters['subsubcategoryId'] = { in: 'formData', type: 'string', required: true, description: 'sub subcategory ID reference' }
       #swagger.parameters['name'] = { in: 'formData', type: 'string', required: true, description: 'Name of the product'}
       #swagger.parameters['price'] = { in: 'formData', type: 'number', required: true, description: 'Price of the product'}
       #swagger.parameters['picture'] = { in: 'formData', type: 'file', required: true, accept: 'image/jpeg, image/png', description: 'Upload one or multiple images', accept: 'image/jpeg, image/png' }
       #swagger.parameters['brand'] = { in: 'formData', type: 'string', required: true ,brand: 'Brand of the product' }
       #swagger.parameters['description'] = { in: 'formData', type: 'string', required: true ,description: 'Description of the product' }
       #swagger.parameters['specifications'] = { in: 'formData', type: 'string', required: false, description: 'JSON string containing specifications.' }
      */
    },

    //Update Product
    async updateProduct(req, res) {
        try {
            const { productId } = req.body; // product ID from path
            const { name, price, description, brand, specifications } = req.body;

            // Find the product by ID
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ success: false, message: 'product not found' });
            }
            // Update fields only if they are provided
            if (name) product.name = name;
            if (price) product.price = price;
            if (description) product.description = description;
            if (brand) product.brand = brand;
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
        #swagger.tags = ['Product']
        #swagger.description = ' update a Existing product with images, brand, specifications, and other details.'
        #swagger.autoBody = false
        #swagger.consumes = ['multipart/form-data'] 
        #swagger.parameters['productId'] = { in: 'formData', type: 'string', required: true, description: 'ID of the product to be updated' }
        #swagger.parameters['categoryId'] = { in: 'formData', type: 'string', required: false, description: 'Category ID reference' }
        #swagger.parameters['subcategoryId'] = { in: 'formData', type: 'string', required: false, description: 'Subcategory ID reference' }
        #swagger.parameters['subsubcategoryId'] = { in: 'formData', type: 'string', required: false, description: 'sub subcategory ID reference' }
        #swagger.parameters['name'] = { in: 'formData', type: 'string', required: false, description: 'Name of the product'}
        #swagger.parameters['price'] = { in: 'formData', type: 'number', required: false, description: 'Price of the product'}
        #swagger.parameters['picture'] = { in: 'formData', type: 'file', required: false, accept: 'image/jpeg, image/png', description: 'Upload one or multiple images', accept: 'image/jpeg, image/png' }
        #swagger.parameters['brand'] = { in: 'formData', type: 'string', required: false ,brand: 'Brand of the product' }
        #swagger.parameters['description'] = { in: 'formData', type: 'string', required: false ,description: 'Description of the product' }
        #swagger.parameters['specifications'] = { in: 'formData', type: 'string', required: false, description: 'JSON string containing specifications.' }
        */
    },

    // Get All Product API
    async GetAllProduct(req, res) {
        try {
            const userId = req.user.id;  // Extract user ID
            console.log(userId)
            const userRole = req.user.role;  // Extract role
            let products;
            if (userRole === 'Superadmin') {
                products = await Product.find(); // Superadmin sees all products
            } else if (userRole === 'Vendor') {
                products = await Product.find({ vendorId: userId }); // Vendor sees only their products
            } else {
                return res.status(403).json({ success: false, message: 'Access Denied' });
            }

            return res.status(200).json({ success: true, data: products });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
        /**
        #swagger.tags = ['Product']
        */
    },

    // Get Product by ID
    async getProductById(req, res) {
        const userId = req.user.id;
        const userRole = req.user.role;

        console.log(userId)
        try {
            const { productId } = req.params;

            if (!productId) {
                return res.status(400).json({ success: false, message: 'Product ID is required' });
            }

            // Fetch the product by ID
            const product = await Product.findById(productId);

            if (!product) {
                return res.status(404).json({ success: false, message: 'Product not found' });
            }

            // Vendor: only allow access if they own the product
            if (userRole === 'Vendor' && product.vendorId.toString() !== userId) {
                return res.status(403).json({ success: false, message: 'Access denied: You do not own this product' });
            }

            return res.status(200).json({
                success: true,
                message: 'Product details retrieved successfully',
                data: product
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Server error',
                error: error.message
            });
        }

        /**
        #swagger.tags = ['Product']
        */
    }



};

module.exports = {
    createProduct: ProductController.createProduct,
    updateProduct: ProductController.updateProduct,
    GetAllProduct: ProductController.GetAllProduct,
    getProductById: ProductController.getProductById,
    upload,
}; 