const express = require('express');
const { createSubSubCatgory, GetAllSubSubCatgory, updateSubSubCatgory, ChangeStatus, upload } = require('../controllers/SubSubCatgory');
const router = express.Router();
const verifyToken = require('../middlewares/VerifyToken'); // Middleware for token authentication
const Authentication = require('../middlewares/Authentication'); //authentication for user

// Public Route (createSubSubCatgory)
router.post('/addSubSubCatgory', verifyToken, Authentication, upload.single('picture'), createSubSubCatgory); //createSubcategory
router.get('/GetAllSubSubCatgory', verifyToken, Authentication, GetAllSubSubCatgory); //getSubcategories
router.put('/updateSubSubCatgory', verifyToken, Authentication, upload.single('picture'), updateSubSubCatgory); //updateSubcategory
router.patch('/changestatus/:subcategory_Id', verifyToken, Authentication, ChangeStatus); //changeSubcategoryStatus


module.exports = router;