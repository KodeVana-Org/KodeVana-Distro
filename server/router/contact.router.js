const express = require("express");
const router = express.Router();
const { submitContactForm} = require('../controller/contact.controller');

// contact form submission
router.post("/submitContactForm", submitContactForm);

module.exports = router;
