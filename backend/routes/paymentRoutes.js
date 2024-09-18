const express = require('express');
const router = express.Router();
const { initiatePayment } = require('../controllers/paymentController');

// Route to initiate payment
router.post('/initiate-payment', initiatePayment);

module.exports = router;
