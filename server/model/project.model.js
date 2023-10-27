const mongoose = require("mongoose");
require('dotenv').config();

// Define schema for projects
const projectSchema = new mongoose.Schema({
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
  category: {
    type: String,
    enum: ['APP', 'WEB', 'UX/UI'], // Define the allowed categories
    required: true
  },
  duration: String
});

module.exports = mongoose.model("Project", projectSchema);
