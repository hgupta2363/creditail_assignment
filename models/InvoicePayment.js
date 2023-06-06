const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InvoicePaymnetSchema = new Schema({
  invoice_id: {
    type: String,
    require,
  },
  paid_amount: {
    type: Number,
    require,
  },
  payment_mode: {
    type: String,
    require,
  },
  paymnent_date: {
    type: String,
    require,
  },
});
module.exports = Category = mongoose.model(
  'invoicePayment',
  InvoicePaymnetSchema
);
