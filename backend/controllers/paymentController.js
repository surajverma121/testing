const initiatePayment = async (req, res) => {
  const { amount, email, phone, name } = req.body;
  console.log('Received request body:', req.body);  


  // Validate request payload
  if (!amount || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const payload = {
    orderId: Date.now().toString(), // Generate a unique order ID, for example
    orderAmount: amount,
    orderCurrency: 'INR',
    customerEmail: email,
    customerPhone: phone || '9999999999', // Default phone number if not provided
    returnUrl: 'http://localhost:3000/success',
    notifyUrl: 'http://localhost:3000/failure',
  };

  try {
    const response = await axios.post(`${cashfreeConfig.baseUrl}${cashfreeConfig.paymentEndpoint}`, payload, {
      headers: {
        'Content-Type': 'application/json',
        'x-client-id': cashfreeConfig.clientId,
        'x-client-secret': cashfreeConfig.clientSecret,
      },
    });

    res.status(200).json({ paymentLink: response.data.paymentLink });
  } catch (error) {
    console.error('Payment initiation error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Payment initiation failed' });
  }
};
