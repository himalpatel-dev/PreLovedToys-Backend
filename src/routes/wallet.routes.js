const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth.middleware');
const walletController = require('../controllers/wallet.controller');
router.use(verifyToken);
// NOTE: Authentication middleware can be added where appropriate (e.g., req.user)
router.get('/', /* #swagger.tags = ['Wallet'] */ walletController.getWallet);
router.post('/credit', /* #swagger.tags = ['Wallet'] */ walletController.credit);
router.post('/debit', /* #swagger.tags = ['Wallet'] */ walletController.debit);
router.post('/transfer', /* #swagger.tags = ['Wallet'] */ walletController.transfer);

module.exports = router;
