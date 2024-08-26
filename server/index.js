/* eslint-disable no-undef */


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const widgetRoutes = require('./routes/widgetRoutes');
const Forum = require('./routes/ForumRoute');
const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/widgets', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/widgets', widgetRoutes);
app.use('/api/forms',Forum)

// Start server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
