const SubSubCatgory = require('../models/SubSubCategory');
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

const SubSubCatgorycontroller = {
    // Create SubSubCatgory
    async createSubSubCatgory(req, res) {
        try {
            const { name, category_id, subcategory_id } = req.body;

            if (!name) {
                return res.status(400).json({ success: false, message: 'Category name is required' });
            }
            // Validate picture
            if (!req.file) {
                return res.status(400).json({ success: false, message: 'Picture is required' });
            }
            if (!category_id) {
                return res.status(400).json({ success: false, message: 'Category and Subcategory ID is required' });
            }
            if (!subcategory_id) {
                return res.status(400).json({ success: false, message: 'Subcategory ID is required' });
            }
            const newSubSubCatgory = new SubSubCatgory({
                name,
                picture: req.file.filename, // Save uploaded file name
                categoryId: category_id,
                subcategoryId: subcategory_id,
            });

            await newSubSubCatgory.save();
            return res.status(201).json({ success: true, message: 'Category created successfully', data: newSubSubCatgory });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
        /**
        #swagger.tags = ['SubSubCatgory']
        #swagger.autoBody = false
        #swagger.consumes = ['multipart/form-data']
        #swagger.parameters['category_id'] = { in: 'formData', type: 'string', required: true },
        #swagger.parameters['subcategory_id'] = { in: 'formData', type: 'string', required: true },
        #swagger.parameters['picture'] = { in: 'formData', type: 'file', required: true,description: 'Category picture', accept: 'image/jpeg, image/png'},
        #swagger.parameters['name'] = { in: 'formData', type: 'string', required: true},
       */
    },

    // Get All SubSubCatgory API
    async GetAllSubSubCatgory(req, res) {
        try {
            const subCatgory = await SubSubCatgory.find(); // Exclude password from the response
            return res.status(200).json({ success: true, data: subCatgory });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
        /**
        #swagger.tags = ['SubSubCatgory']
        */
    },

    // Update Category
    async updateSubSubCatgory(req, res) {
        try {
            const { category_Id } = req.body; // Category ID from path
            const { name } = req.body;

            // Find the category by ID
            const subCatgory = await SubSubCatgory.findById(category_Id);
            if (!subCatgory) {
                return res.status(404).json({ success: false, message: 'Category not found' });
            }

            // Update fields
            if (name) category.name = name;
            if (req.file) category.picture = req.file.filename;

            await subCatgory.save();

            return res.status(200).json({ success: true, message: 'Category updated successfully', data: subCatgory });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }

        /**
        #swagger.tags = ['SubSubCatgory']
        #swagger.autoBody = false
        #swagger.consumes = ['multipart/form-data']
        #swagger.parameters['category_Id'] = { in: 'formData', type: 'string', required: true },
        #swagger.parameters['picture'] = { in: 'formData', type: 'file', required: false, description: 'Category picture', accept: 'image/jpeg, image/png'},
        #swagger.parameters['name'] = { in: 'formData', type: 'string', required: false },
        */
    },

    // Change Category status
    async ChangeStatus(req, res) {
        try {
            const { category_Id } = req.params;

            // Find the category by ID
            const subCatgory = await SubSubCatgory.findById(category_Id);

            if (!subCatgory) {
                return res.status(404).json({ success: false, message: 'category not found' });
            }
            // Toggle the status
            subCatgory.status = !subCatgory.status;

            // Save the updated admin
            await subCatgory.save();

            return res.status(200).json({ success: true, message: 'Status updated successfully', data: subCatgory });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
        /**
        #swagger.tags = ['SubSubCatgory']
        #swagger.autoBody = false
        #swagger.consumes = ['multipart/form-data']
        */
    },

}
module.exports = {
    createSubSubCatgory: SubSubCatgorycontroller.createSubSubCatgory,
    updateSubSubCatgory: SubSubCatgorycontroller.updateSubSubCatgory,
    GetAllSubSubCatgory: SubSubCatgorycontroller.GetAllSubSubCatgory,
    ChangeStatus: SubSubCatgorycontroller.ChangeStatus,
    upload,
}