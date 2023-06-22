const express = require('express');

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

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
