const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const verifyToken = require('../middlewares/auth.middleware');

router.use(verifyToken); // Protect all routes

// POST /api/orders (Checkout)
router.post('/', /* #swagger.tags = ['Orders'] */ orderController.placeOrder);

// GET /api/orders (History)
router.get('/', /* #swagger.tags = ['Orders'] */ orderController.getMyOrders);

router.get('/admin/all', /* #swagger.tags = ['Orders'] */ orderController.getAllOrdersAdmin);
router.put('/admin/:id/status', /* #swagger.tags = ['Orders'] */ orderController.updateOrderStatus);

module.exports = router;