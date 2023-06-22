const router = require('express').Router();

const Invoices = require('../models/Invoice');
router.get('/invoices', async (req, res) => {
  console.log('invoices');
  const allInvoices = await Invoices.find();
  res.json(allInvoices);
});
router.get('/paymnet', async (req, res) => {
  console.log('invoices');
  const allInvoices = await Invoices.find();
  res.json(allInvoices);
});
router.post('/invoices', async (req, res) => {
  const newInvoiceData = req.body;
  try {
    const invoice = new Invoices(newInvoiceData);
    await invoice.save();
    res.status(200).send({ invoice: invoice._id });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
module.exports = router;
