const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');
const verifyToken = require('../middlewares/auth.middleware');

// All Cart routes need login
router.use(verifyToken);

// POST /api/cart (Add)
router.post('/', /* #swagger.tags = ['Cart'] */ cartController.addToCart);

// GET /api/cart (View)
router.get('/', /* #swagger.tags = ['Cart'] */ cartController.getCart);

// DELETE /api/cart/:id (Remove specific item)
router.delete('/:id', /* #swagger.tags = ['Cart'] */ cartController.remove);

module.exports = router;