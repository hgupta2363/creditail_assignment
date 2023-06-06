const router = require('express').Router();
const InvoicePayment = require('../models/InvoicePayment');
const Invoices = require('../models/Invoice');
router.post('/invoicePaymnet', async (req, res) => {
  const newPaymentData = req.body;

  try {
    const payment = new InvoicePayment(newPaymentData);
    await payment.save();
    await Invoices.updateOne(
      { _id: newPaymentData?.invoice_id },
      { $inc: { pending_amount: -1 * Number(newPaymentData?.paid_amount) } }
    );
    res.status(200).send({});
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
module.exports = router;
