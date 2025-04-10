const express = require('express');
const router = express.Router();

// Importing the Admin and Products routers
const superadminRoutes = require('../routes/Superadmin'); // Assuming your admin routes are in adminRoutes.js
const vendorRoutes = require('../routes/Vendors'); // Assuming your admin routes are in vendorRoutes.js
const categoryRoutes = require('../routes/Category'); // Assuming your admin routes are in categoryRoutes.js
const subcategoryRoutes = require('../routes/Subcategory'); // Assuming your admin routes are in subcategoryRoutes.js
const subSubCatgoryRoutes = require('../routes/SubSubCatgory'); // Assuming your admin routes are in subSubCatgoryRoutes.js
// const productRoutes = require('../routes/Product'); // Assuming your admin routes are in productRoutes.js
const electronicRoutes = require('../routes/Electronics'); // Assuming your admin routes are in electronicRoutes.js
const fashionRoutes = require('../routes/Fashion'); // Assuming your admin routes are in fashionRoutes.js
const mobilesRoutes = require('../routes/Mobile'); // Assuming your admin routes are in mobilesRoutes.js
const reviewRoutes = require('../routes/Review'); // Assuming your admin routes are in reviewRoutes.js
const cartRoutes = require('../routes/Cart'); // Assuming your admin routes are in cartRoutes.js
const userRoutes = require('../routes/User'); // Assuming your admin routes are in userRoutes.js
const addressRoutes = require('../routes/Address'); // Assuming your admin routes are in addressRoutes.js
const orderRoutes = require('../routes/Order'); // Assuming your admin routes are in addressRoutes.js



router.use('/SuperAdmin', superadminRoutes);// SuperAdmin routes
router.use('/Vendor', vendorRoutes);//vendor  Routes
router.use('/Category', categoryRoutes);//Category  Routes
router.use('/SubCategory', subcategoryRoutes);//SubCategory  Routes
router.use('/SubSubCatgory', subSubCatgoryRoutes);//SubSubCatgory  Routes
router.use('/Electronic', electronicRoutes);//Electronic  Routes
router.use('/Fashion', fashionRoutes);//fashion Routes 
router.use('/Mobiles', mobilesRoutes);//Mobiles  Routes
router.use('/Review', reviewRoutes);//Review  Routes
router.use('/User', userRoutes);//user  Routes
router.use('/Cart', cartRoutes);//Cart  Routes
router.use('/Address', addressRoutes);//Address Routes
router.use('/Order', orderRoutes);//Order Routes
// router.use('/Product', productRoutes); //Product  Routes

module.exports = router;
