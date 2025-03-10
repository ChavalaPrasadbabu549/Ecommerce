const Mobiles = require('../models/Mobiles'); // Import Mobiles Model
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

const upload = multer({ storage }).array('picture');

const MobilesController = {
    // Create Product
    async createProduct(req, res) {
        const vendorId = req.user.id; // Extract vendor ID from the authenticated user
        const { name, price, categoryId, subcategoryId, description, brand, specifications, } = req.body;
        try {


            // Validate required fields
            if (!name || !price || !categoryId || !subcategoryId || !description || !brand) {
                return res.status(400).json({ success: false, message: 'All required fields must be filled' });
            }

            // Handling file uploads (for multiple images)
            const pictures = req.files ? req.files.map(file => file.filename) : [];

            //  Convert specifications from a JSON string to an array of objects
            let parsedSpecifications = [];
            if (typeof specifications === "string") {
                try {
                    parsedSpecifications = JSON.parse(specifications); // Convert string to JSON array
                } catch (error) {
                    return res.status(400).json({ success: false, message: "Invalid specifications format. Must be a valid JSON array." });
                }
            }

            const newProduct = new Mobiles({
                name,
                price,
                categoryId,
                subcategoryId,
                description,
                picture: pictures,
                brand,
                specifications: parsedSpecifications,  // Store as JSON
                vendorId
            });

            await newProduct.save();
            return res.status(201).json({ success: true, message: 'Product created successfully', data: newProduct });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
        /**
       #swagger.tags = ['Mobiles']
       #swagger.description = 'Create a new electronics product with images, brand, specifications, and other details.'
       #swagger.autoBody = false
       #swagger.consumes = ['multipart/form-data']
       #swagger.parameters['name'] = { in: 'formData', type: 'string', required: true, description: 'Name of the product' }
       #swagger.parameters['price'] = { in: 'formData', type: 'number', required: true, description: 'Price of the product' }
       #swagger.parameters['categoryId'] = { in: 'formData', type: 'string', required: true, description: 'Category ID reference' }
       #swagger.parameters['subcategoryId'] = { in: 'formData', type: 'string', required: true, description: 'Subcategory ID reference' }
       #swagger.parameters['description'] = { in: 'formData', type: 'string', required: true, description: 'Description of the product' }
       #swagger.parameters['brand'] = { in: 'formData', type: 'string', required: true, description: 'Brand of the product', enum: ['Apple','Real Me', 'Samsung', 'Sony', 'LG', 'Dell', 'HP', 'Lenovo', 'Asus', 'Microsoft'] }
       #swagger.parameters['specifications'] = { in: 'formData', type: 'string', required: false, description: 'JSON string containing specifications.' }
       #swagger.parameters['picture'] = { in: 'formData', type: 'file', required: true, description: 'Upload one or multiple images', accept: 'image/jpeg, image/png' }
      */
    },

    // Update Product
    async updateProduct(req, res) {
        const { productId } = req.body; // product ID from path
        try {
            const { name, price, description, brand, specifications } = req.body;

            // Find the product by ID
            const electronic = await Mobiles.findById(productId);
            if (!electronic) {
                return res.status(404).json({ success: false, message: 'product not found' });
            }

            // Update fields only if they are provided
            if (name) electronic.name = name;
            if (price) electronic.price = price;
            if (description) electronic.description = description;
            if (brand) electronic.brand = brand;
            if (specifications) {
                electronic.specifications = typeof specifications === 'string' ? JSON.parse(specifications) : specifications;
            }

            // Handling file uploads (for multiple images)
            if (req.files && req.files.length > 0) {
                const pictures = req.files.map(file => file.filename);
                electronic.picture = pictures; // Only update if new images are provided
            }


            await electronic.save();

            return res.status(200).json({ success: true, message: 'product updated successfully', data: electronic });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }

        /**
       #swagger.tags = ['Mobiles']
       #swagger.autoBody = false
       #swagger.consumes = ['multipart/form-data']
       #swagger.parameters['productId'] = { in: 'formData', type: 'string', required: true, description: 'ID of the product to be updated' }
       #swagger.parameters['name'] = { in: 'formData', type: 'string', required: false, description: 'Updated product name' }
       #swagger.parameters['price'] = { in: 'formData', type: 'number', required: false, description: 'Updated product price' }
       #swagger.parameters['description'] = { in: 'formData', type: 'string', required: false, description: 'Updated product description' }
       #swagger.parameters['categoryId'] = { in: 'formData', type: 'string', required: false, description: 'Updated category ID' }
       #swagger.parameters['subcategoryId'] = { in: 'formData', type: 'string', required: false, description: 'Updated subcategory ID' }
       #swagger.parameters['brand'] = { in: 'formData', type: 'string', required: false, description: 'Updated brand name' }
       #swagger.parameters['specifications'] = { in: 'formData', type: 'string', required: false, description: 'Updated product specifications as JSON string' }
       #swagger.parameters['picture'] = { in: 'formData', type: 'file', required: false, description: 'Upload one or multiple updated images', accept: 'image/jpeg, image/png' }
       */
    },

    // Get All Product API
    async GetAllProduct(req, res) {
        const userId = req.user.id;  // Extract user ID
        const userRole = req.user.role;  // Extract role
        try {
            let electronics;
            if (userRole === 'Superadmin') {
                electronics = await Mobiles.find(); // Superadmin sees all products
            } else if (userRole === 'Vendor') {
                electronics = await Mobiles.find({ vendorId: userId }); // Vendor sees only their products
            } else {
                return res.status(403).json({ success: false, message: 'Access Denied' });
            }

            return res.status(200).json({ success: true, data: electronics });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }

        /**
        #swagger.tags = ['Mobiles']
        */
    },

    // Get Product by Id API
    async getProductById(req, res) {
        try {
            const { productId } = req.params;

            if (!productId) {
                return res.status(400).json({ success: false, message: 'Product ID is required' });
            }

            // Find the product by ID
            const electronics = await Mobiles.findById(productId);

            if (!electronics) {
                return res.status(404).json({ success: false, message: 'Product not found' });
            }

            return res.status(200).json({ success: true, message: 'Product details retrieved successfully', data: electronics });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
        /**
        #swagger.tags = ['Mobiles']
       */
    },


};

module.exports = {
    createProduct: MobilesController.createProduct,
    GetAllProduct: MobilesController.GetAllProduct,
    updateProduct: MobilesController.updateProduct,
    getProductById: MobilesController.getProductById,
    upload,
};