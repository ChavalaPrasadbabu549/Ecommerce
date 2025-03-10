const express = require('express');
const { createProduct,  upload } = require('../controllers/Electronics');
const router = express.Router();
const verifyToken = require('../middlewares/VerifyToken'); // Middleware for token authentication
const Authentication = require('../middlewares/Authentication'); //authentication for user

// Public Route (Electronics)
router.post('/addproduct', verifyToken, Authentication, upload.single('picture'), createProduct); //createProduct
// router.get('/getallproducts', verifyToken, Authentication, GetAllProduct); //createProduct
// router.put('/updateproduct', verifyToken, Authentication, upload.single('picture'), updateProduct); //updateProduct
// router.get('/getProductById/:productId', verifyToken, Authentication, getProductById); //getProductById

module.exports = router;