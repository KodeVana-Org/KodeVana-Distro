const express = require("express");
const router = express.Router();

const {
  getAllProjects,
  getRecentThreeProjects,
  getRecentProject
} = require("../controller/project.controller.js");

router.get('/getAllProjects', getAllProjects);
router.get('/getRecentThreeProjects', getRecentThreeProjects);
router.get('/getRecentProject', getRecentProject);

module.exports = router;