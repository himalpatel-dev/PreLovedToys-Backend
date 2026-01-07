const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/auth.middleware');

router.use(verifyToken); // Protect all routes


// Protect these routes! Only logged-in Admins should access.
// (Assuming verifyToken checks for valid user, you might want an 'isAdmin' middleware later)
router.get('/', /* #swagger.tags = ['Users'] */ userController.getAllUsers);
router.put('/:id/status', /* #swagger.tags = ['Users'] */ userController.toggleUserStatus);
// Allow authenticated user to update their own profile
router.put('/profile', /* #swagger.tags = ['Users'] */ userController.updateProfile);
// Get authenticated user's profile
router.get('/profile', /* #swagger.tags = ['Users'] */ userController.getProfile);

// Get authenticated user's stats (orders, sales, wallet)
router.get('/stats', /* #swagger.tags = ['Users'] */ userController.getUserStats);

module.exports = router;