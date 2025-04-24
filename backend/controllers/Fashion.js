const Fashion = require('../models/Fashion');
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

const FashionController = {
    // Create Fashion Product
    async createFashionProduct(req, res) {
        const vendorId = req.user.id;
        const { name, price, categoryId, subcategoryId, subsubcategoryId, description, brand, size, specifications } = req.body;
        try {
            if (!name || !price || !categoryId || !subcategoryId || !subsubcategoryId || !description || !brand) {
                return res.status(400).json({ success: false, message: 'All required fields must be filled' });
            }

            const pictures = req.files ? req.files.map(file => file.filename) : [];

            let parsedSpecifications = [];
            if (typeof specifications === "string") {
                try {
                    parsedSpecifications = JSON.parse(specifications);
                } catch (error) {
                    return res.status(400).json({ success: false, message: "Invalid specifications format. Must be JSON." });
                }
            }

            const newProduct = new Fashion({
                name,
                price,
                categoryId,
                subcategoryId,
                subsubcategoryId,
                description,
                picture: pictures,
                brand,
                size,
                specifications: parsedSpecifications,
                vendorId
            });

            await newProduct.save();
            return res.status(201).json({ success: true, message: 'Fashion product created successfully', data: newProduct });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
        /**
       #swagger.tags = ['Fashion']
       #swagger.autoBody = false
       #swagger.consumes = ['multipart/form-data']
       #swagger.parameters['name'] = { in: 'formData', type: 'string', required: true, description: 'Name of the product' }
       #swagger.parameters['price'] = { in: 'formData', type: 'number', required: true, description: 'Price of the product' }
       #swagger.parameters['categoryId'] = { in: 'formData', type: 'string', required: true, description: 'Category ID reference' }
       #swagger.parameters['subcategoryId'] = { in: 'formData', type: 'string', required: true, description: 'Subcategory ID reference' }
       #swagger.parameters['subsubcategoryId'] = { in: 'formData', type: 'string', required: true, description: 'subsubcategoryId ID reference' }
       #swagger.parameters['description'] = { in: 'formData', type: 'string', required: true, description: 'Description of the product' }
       #swagger.parameters['brand'] = { in: 'formData', type: 'string', required: true, description: 'Brand of the product' }
       #swagger.parameters['size'] = { in: 'formData', type: 'string', required: true, description: 'size of the product' }
       #swagger.parameters['specifications'] = { in: 'formData', type: 'string', required: false, description: 'JSON string containing specifications.' }
       #swagger.parameters['picture'] = { in: 'formData', type: 'file', required: true, description: 'Upload one or multiple images', accept: 'image/jpeg, image/png' }
      */
    },
    // Update Product
    async updateFashionProduct (req, res) {
        const { productId } = req.body; // product ID from path
        try {
            const { name, price, description, brand, size, specifications } = req.body;

            // Find the product by ID
            const product = await Fashion.findById(productId);
            if (!product) {
                return res.status(404).json({ success: false, message: 'product not found' });
            }

            // Update fields only if they are provided
            if (name) product.name = name;
            if (price) product.price = price;
            if (description) product.description = description;
            if (brand) product.brand = brand;
            if (size) product.brand = size;
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
       #swagger.tags = ['Fashion']
       #swagger.autoBody = false
       #swagger.consumes = ['multipart/form-data']
       #swagger.parameters['productId'] = { in: 'formData', type: 'string', required: true, description: 'ID of the product to be updated' }
       #swagger.parameters['name'] = { in: 'formData', type: 'string', required: false, description: 'Updated product name' }
       #swagger.parameters['price'] = { in: 'formData', type: 'number', required: false, description: 'Updated product price' }
       #swagger.parameters['description'] = { in: 'formData', type: 'string', required: false, description: 'Updated product description' }
       #swagger.parameters['categoryId'] = { in: 'formData', type: 'string', required: false, description: 'Updated category ID' }
       #swagger.parameters['subcategoryId'] = { in: 'formData', type: 'string', required: false, description: 'Updated subcategory ID' }
       #swagger.parameters['brand'] = { in: 'formData', type: 'string', required: false, description: 'Updated brand name' }
       #swagger.parameters['size'] = { in: 'formData', type: 'string', required: false, description: 'Updated size name' }
       #swagger.parameters['specifications'] = { in: 'formData', type: 'string', required: false, description: 'Updated product specifications as JSON string' }
       #swagger.parameters['picture'] = { in: 'formData', type: 'file', required: false, description: 'Upload one or multiple updated images', accept: 'image/jpeg, image/png' }
       */
    },

    // Get All Fashion Products
    async getAllFashionProducts(req, res) {
        const userId = req.user.id;  // Extract user ID
        const userRole = req.user.role;  // Extract role
        try {
            let products;
            if (userRole === 'Superadmin') {
                products = await Fashion.find(); // Superadmin sees all products
            } else if (userRole === 'Vendor') {
                products = await Fashion.find({ vendorId: userId }); // Vendor sees only their products
            } else {
                return res.status(403).json({ success: false, message: 'Access Denied' });
            }

            return res.status(200).json({ success: true, data: products });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
        /**
       #swagger.tags = ['Fashion']
      */
    },

    // Get Fashion Product by ID
    async getFashionProductById(req, res) {
        try {
            const { productId } = req.params;

            if (!productId) {
                return res.status(400).json({ success: false, message: 'Product ID is required' });
            }

            const product = await Fashion.findById(productId);

            if (!product) {
                return res.status(404).json({ success: false, message: 'Product not found' });
            }

            return res.status(200).json({ success: true, message: 'Product details retrieved successfully', data: product });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
        /**
       #swagger.tags = ['Fashion']
      */
    },
};

module.exports = {
    createFashionProduct: FashionController.createFashionProduct,
    updateFashionProduct : FashionController.updateFashionProduct,
    getAllFashionProducts: FashionController.getAllFashionProducts,
    getFashionProductById: FashionController.getFashionProductById,
    upload,
};


