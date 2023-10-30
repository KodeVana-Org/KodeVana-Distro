const express = require("express");
const router = express.Router();

const {
  getAllProjects,
  getRecentThreeProjects,
  getRecentProject
} = require("../controller/project.controller.js");

router.get('/getAllProjects', getAllProjects);

module.exports = router;