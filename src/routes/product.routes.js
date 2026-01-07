const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const verifyToken = require('../middlewares/auth.middleware');

router.use(verifyToken); // Protect all routes

// 1. Specific Routes MUST be at the top
router.post('/', /* #swagger.tags = ['Products'] */ productController.addProduct);
router.get('/my-listings', /* #swagger.tags = ['Products'] */ productController.getMyListings);
router.get('/sales-count/points', /* #swagger.tags = ['Products'] */ productController.getPointsSalesCount);
router.get('/sell-eligibility', /* #swagger.tags = ['Products'] */ productController.checkSellEligibility); // Check if user can sell for cash

// 2. General "Get All" route
router.get('/', /* #swagger.tags = ['Products'] */ productController.getProducts);

// 3. Variable ID Routes MUST be at the bottom
// Because this acts like a wildcard, it will try to capture "my-listings" if placed above.
router.get('/:id', /* #swagger.tags = ['Products'] */ productController.getProductById);

// 4. Delete route (also uses ID)
router.delete('/:id', /* #swagger.tags = ['Products'] */ productController.deleteListing);

// PUT /api/products/:id/status
router.put('/:id/status', /* #swagger.tags = ['Products'] */ productController.updateStatus);

// ADMIN ROUTES
router.get('/admin/all', /* #swagger.tags = ['Products'] */ productController.getAllProductsAdmin);

router.get('/sub-category/:subcategoryId', /* #swagger.tags = ['Products'] */ productController.getproductbysubcategory);

module.exports = router;