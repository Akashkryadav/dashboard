// models/widgetModel.js
// eslint-disable-next-line no-undef
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define widget schema
const widgetSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Number,
    required: true,
  }
});

// Create widget model
const Widget = mongoose.model('Widget', widgetSchema);

// eslint-disable-next-line no-undef
module.exports = Widget;
