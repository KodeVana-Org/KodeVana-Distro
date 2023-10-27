const mongoose = require('mongoose')

const visitorSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  count: { type: Number, required: true },
});

module.exports = mongoose.model('Visitor', visitorSchema);
