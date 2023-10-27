const express = require("express");
const router = express.Router();



// Admin login routes
const { auth } = require("../middleware/auth");
const { adminLogin, adminLogout, registerAdmin } = require("../controller/admin.controller");

router.post("/adminlogin", adminLogin);
router.post("/adminLogout", auth, adminLogout);
router.post("/registerAdmin", registerAdmin);



// Contact form
const { getAllContactList, deleteContactData } = require('../controller/admin.contact.controller')

router.get('/getAllContactList', getAllContactList)
router.delete('/deleteContactData', deleteContactData)



// Employee routes - Admin
const {
  createEmployee,
  deleteEmployee,
  searchEmployee,
  updateEmployee,
  getAllEmployees
} = require("../controller/admin.employee.controller.js")
// Founder routes - Admin x Frontend
const { getAllFounders } = require("../controller/founder.controller.js")

router.get('/createEmployee', createEmployee);
router.get('/deleteEmployee', deleteEmployee);
router.get('/searchEmployee', searchEmployee);
router.get('/updateEmployee', updateEmployee);
router.get('/getAllEmployees', getAllEmployees);
router.get('/getAllFounders', getAllFounders);



// Project routes - Frontend
const {
  getAllProjects,
  getRecentThreeProjects,
  getRecentProject
} = require("../controller/project.controller.js");
// Project routes - Admin
const {
  createProject,
  deleteProject,
  searchProject,
  updateProject
} = require("../controller/admin.project.controller.js")

router.get('/createProject', createProject);
router.get('/deleteProject', deleteProject);
router.get('/searchProject', searchProject);
router.get('/updateProject', updateProject);
router.get('/getAllProjects', getAllProjects);
router.get('/getRecentThreeProjects', getRecentThreeProjects);
router.get('/getRecentProject', getRecentProject);



// Blog routes - Frontend
const {
  getAllBlogs,
  getRecentBlog,
} = require("../controller/blog.controller.js");
// Blog routes - Admin
const {
  createBlog,
  deleteBlog,
  searchBlog,
  updateBlog
} = require("../controller/admin.blog.controller.js")

router.get('/createBlog', createBlog);
router.get('/deleteBlog', deleteBlog);
router.get('/searchBlog', searchBlog);
router.get('/updateBlog', updateBlog);
router.get('/getAllBlogs', getAllBlogs);
router.get('/getRecentBlog', getRecentBlog);

module.exports = router;