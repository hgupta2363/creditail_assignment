const express = require('express');
const invoiceRouter = require('./router/invoices');
const cors = require('cors');
const PORT = 8000;
require('./db');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(invoiceRouter);
app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
