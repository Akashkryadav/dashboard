/* eslint-disable no-undef */

// eslint-disable-next-line no-undef
const mongoose = require('mongoose');

const widgetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: Number, required: true },
});

const Widget = mongoose.model('Widget', widgetSchema);

module.exports = Widget;

