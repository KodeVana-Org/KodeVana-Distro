
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  thumbnail: {
    url: {
      type: String,
      required: true
    }
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    require: true
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blog', blogSchema);
