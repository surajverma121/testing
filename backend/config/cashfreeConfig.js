require('dotenv').config(); // To load environment variables from a .env file

const cashfreeConfig = {
  // Base URL for the Cashfree API (use sandbox or production URL as required)
  baseUrl: process.env.CASHFREE_API_BASE_URL || 'https://sandbox.cashfree.com/pg/',
  
  // Client ID and Secret Key for Cashfree
  clientId: process.env.CASHFREE_APP_ID,
  clientSecret: process.env.CASHFREE_SECRET_KEY,
  
  // Optional: Specific API endpoints if you need to configure them separately
  paymentEndpoint: 'orders',
  
  // Optional: You can define other constants or configurations if needed
};

module.exports = cashfreeConfig;
