const express = require('express');
const { createProduct, updateProduct, GetAllProduct, getProductById, upload } = require('../controllers/Product');
const router = express.Router();
const verifyToken = require('../middlewares/VerifyToken'); // Middleware for token authentication
const Authentication = require('../middlewares/Authentication'); //authentication for user

// Public Route (product)
router.post('/addproduct', verifyToken, Authentication, upload, createProduct); //createProduct
router.put('/updateproduct', verifyToken, Authentication, upload, updateProduct); //updateProduct
router.get('/getallproducts', verifyToken, Authentication, GetAllProduct); //createProduct
router.get('/getProductById/:productId', verifyToken, Authentication, getProductById); //getProductById

module.exports = router;