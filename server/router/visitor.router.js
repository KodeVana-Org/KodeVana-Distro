const express = require("express");
const router = express.Router();
const { addVisitor, getVisitors } = require ("../controller/visitor.controller");


router.post('/addVisitor', addVisitor);
router.get('/getVisitors', getVisitors);

module.exports = router;