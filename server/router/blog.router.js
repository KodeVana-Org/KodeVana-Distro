const express = require("express");
const router = express.Router();

const {
  getAllBlogs,
  getRecentBlog
} = require("../controller/blog.controller.js");

router.get('/getAllBlogs', getAllBlogs);
router.get('/getRecentBlog', getRecentBlog);

module.exports = router;