const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const paymentRoutes = require('./routes/paymentRoutes');

// Initialize environment variables
dotenv.config();


// Create an Express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS if your frontend is on a different origin
app.use(bodyParser.json()); // Parse incoming JSON requests

// Define API routes
app.use('/api/payment', paymentRoutes);
// app.post('/api/payment', (req, res) => {
//   res.send('/success');
// });


// Basic route for testing
app.get('/', (req, res) => {
  res.send('Cashfree Payment Gateway Backend is running!');
  app.post('/api/payment',)
});

// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
