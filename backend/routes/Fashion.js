const express = require('express');
const { createFashionProduct, getAllFashionProducts, getFashionProductById, updateFashionProduct, upload } = require('../controllers/Fashion');
const router = express.Router();
const verifyToken = require('../middlewares/VerifyToken'); // Middleware for token authentication
const Authentication = require('../middlewares/Authentication'); //authentication for user

// Public Route (Fashion)
router.post('/addFashion', verifyToken, Authentication, upload, createFashionProduct); //createProduct
router.get('/getAllFashion', verifyToken, Authentication, getAllFashionProducts); //GetAllProduct
router.put('/updateFashion', verifyToken, Authentication, upload, updateFashionProduct); //updateProduct
router.get('/getFashionById/:productId', verifyToken, Authentication, getFashionProductById); //getProductById

module.exports = router;