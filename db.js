const mongoose = require('mongoose');
const password = '1234567890';
return mongoose.connect(
  `mongodb+srv://hgupta2363:${password}@cluster0.v0mghpu.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
