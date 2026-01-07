const express = require('express');
const router = express.Router();
const savedAddressController = require('../controllers/savedaddress.controller');
const verifyToken = require('../middlewares/auth.middleware');

router.use(verifyToken); // Protect all routes

// 1. Specific routes first
router.get('/my-addresses', /* #swagger.tags = ['SavedAddress'] */ savedAddressController.getMyAddresses); // Get all user addresses
router.get('/default', /* #swagger.tags = ['SavedAddress'] */ savedAddressController.getDefaultAddress); // Get default address
router.post('/', /* #swagger.tags = ['SavedAddress'] */ savedAddressController.createAddress); // Create new address

// 2. Variable ID routes
router.get('/:id', /* #swagger.tags = ['SavedAddress'] */ savedAddressController.getAddressById); // Get single address
router.put('/:id', /* #swagger.tags = ['SavedAddress'] */ savedAddressController.updateAddress); // Update address
router.delete('/:id', /* #swagger.tags = ['SavedAddress'] */ savedAddressController.deleteAddress); // Delete address
router.put('/:id/set-default', /* #swagger.tags = ['SavedAddress'] */ savedAddressController.setDefaultAddress); // Set as default

module.exports = router;
