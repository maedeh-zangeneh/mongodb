const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully to Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
