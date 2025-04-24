const express = require('express');
const { createProduct, updateProduct, GetAllProduct, getProductById, upload } = require('../controllers/Electronics');
const router = express.Router();
const verifyToken = require('../middlewares/VerifyToken'); // Middleware for token authentication
const Authentication = require('../middlewares/Authentication'); //authentication for user

// Public Route (Electronics)
router.post('/addProduct', verifyToken, Authentication, upload, createProduct); //createProduct
router.put('/updateProduct', verifyToken, Authentication, upload, updateProduct); //updateProduct
router.get('/getallproducts', verifyToken, Authentication, GetAllProduct); //GetAllProduct
router.get('/getProductById/:productId', verifyToken, Authentication, getProductById); //getProductById

module.exports = router;