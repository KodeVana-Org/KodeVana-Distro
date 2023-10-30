const express = require("express");
const router = express.Router();

// Middleware authentication
const { auth } = require("../middleware/auth");

// Admin login routes
const { adminLogin, adminLogout, registerAdmin } = require("../controller/admin.controller");
router.post("/adminlogin", adminLogin);
router.post("/adminLogout", auth, adminLogout);
router.post("/registerAdmin", registerAdmin);

// Contact form
const { getAllContactList, deleteContactData } = require('../controller/admin.contact.controller')
router.get('/getAllContactList', auth, getAllContactList)
router.delete('/deleteContactData', auth, deleteContactData)

// Employee routes - Admin
const {
  createEmployee,
  deleteEmployee,
  searchEmployee,
  updateEmployee,
  getAllEmployees
} = require("../controller/admin.employee.controller.js")
router.get('/createEmployee', auth, createEmployee);
router.get('/deleteEmployee', auth, deleteEmployee);
router.get('/searchEmployee', auth, searchEmployee);
router.get('/updateEmployee', auth, updateEmployee);
router.get('/getAllEmployees', auth, getAllEmployees);

// Project routes - Admin
const {
  createProject,
  deleteProject,
  searchProject,
  updateProject
} = require("../controller/admin.project.controller.js")
router.get('/createProject', auth, createProject);
router.get('/deleteProject', auth, deleteProject);
router.get('/searchProject', auth, searchProject);
router.get('/updateProject', auth, updateProject);

// Blog routes - Admin
const {
  createBlog,
  deleteBlog,
  searchBlog,
  updateBlog
} = require("../controller/admin.blog.controller.js")

router.get('/createBlog', auth, createBlog);
router.get('/deleteBlog', auth, deleteBlog);
router.get('/searchBlog', auth, searchBlog);
router.get('/updateBlog', auth, updateBlog);

module.exports = router;