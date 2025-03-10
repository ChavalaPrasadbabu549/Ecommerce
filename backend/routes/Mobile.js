const express = require('express');
const { createProduct, GetAllProduct, getProductById, updateProduct, upload } = require('../controllers/Mobile');
const router = express.Router();
const verifyToken = require('../middlewares/VerifyToken'); // Middleware for token authentication
const Authentication = require('../middlewares/Authentication'); //authentication for user

// Public Route (Mobiles)
router.post('/addMobiles', verifyToken, Authentication, upload, createProduct); //createProduct
router.get('/getallMobiles', verifyToken, Authentication, GetAllProduct); //GetAllProduct
router.put('/updateMobiles', verifyToken, Authentication, upload, updateProduct); //updateProduct
router.get('/getMobilesById/:productId', verifyToken, Authentication, getProductById); //getProductById

module.exports = router;