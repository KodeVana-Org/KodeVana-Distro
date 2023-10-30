const express = require("express");
const router = express.Router();

const { getAllBlogs } = require("../controller/blog.controller.js");

router.get('/getAllBlogs', getAllBlogs);

module.exports = router;