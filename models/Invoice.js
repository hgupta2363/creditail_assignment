const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const InvoiceSchema = new Schema({
  brand: {
    type: String,
  },
  sales_rep_id: {
    type: String,
  },
  salesman_name: {
    type: String,
  },
  invoice_amount: {
    type: Number,
  },
  retailer_id: {
    type: String,
  },
  retailer_name: {
    type: String,
  },

  retailer_ph_no: {
    type: String,
  },
  invoice_date: {
    type: String,
  },
  bill_no: {
    type: String,
  },
  pending_amount: {
    type: String,
  },
  collection_date: {
    type: String,
  },
});

module.exports = Category = mongoose.model('invoice', InvoiceSchema);
