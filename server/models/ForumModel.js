/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    assetName:'String',
    titleName:'String',
    tvModel2024: 'string',
    tvModel2023: 'string',
    tvModel2017: 'string',
    tab: 'string',

});
const data = mongoose.model('data', dataSchema)

module.exports = data