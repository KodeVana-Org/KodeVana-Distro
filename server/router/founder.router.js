const express = require("express");
const router = express.Router();

const { getAllFounders } = require("../controller/founder.controller.js");

router.get('/getAllFounders', getAllFounders);

module.exports = router;