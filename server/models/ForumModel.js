/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    assetName: { type: String, required: true },
    seriesTitle: { type: String, required: true },
    ticketId: { type: String, required: true },
    targetDate: { type: Date, required: true }
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
