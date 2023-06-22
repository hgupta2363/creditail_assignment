const express = require('express');
const crypto = require('crypto');
const cors = require('cors');
const Razorpay = require('razorpay');
const PORT = 8000;
const razorpayInstance = new Razorpay({
  // Replace with your key_id
  key_id: 'rzp_test_FZtvw0tNQrQvYw',

  // Replace with your key_secret
  key_secret: 'MnClRSVdyD0GnAoj1Yy8ELit',
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.post('/createOrder', (req, res) => {
  // STEP 1:
  const { amount, currency, receipt, notes } = req.body;
  console.log(razorpayInstance);
  // STEP 2:
  razorpayInstance.orders.create(
    { amount, currency, receipt, notes },
    (err, order) => {
      //STEP 3 & 4:
      if (!err) res.json(order);
      else res.send(err);
    }
  );
});
app.post('/success', async (req, res) => {
  try {
    // getting the details back from our font-end
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

    // Creating our own digest
    // The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    const shasum = crypto.createHmac('sha256', 'MnClRSVdyD0GnAoj1Yy8ELit');

    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

    const digest = shasum.digest('hex');

    // comaparing our digest with the actual signature
    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: 'Transaction not legit!' });

    // THE PAYMENT IS LEGIT & VERIFIED
    // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

    res.json({
      msg: 'success',
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
