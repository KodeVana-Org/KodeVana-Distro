const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../model/admin.model");
require('dotenv').config();


// Admin Login
exports.adminLogin = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if ( !username || !email || !password ) {
      return res.status(404).json({
        success: false,
        message: "Please fill all the detail!",
      });
    }
    // Validation admin data
    const data = await Admin.findOne({ email });
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "You are not an admin please visit https://kodevana.com instead!",
      });
    }
    const payload = { email: data.email, id: data._id,  };
    //verify password and generate a jwt token
    if (await bcrypt.compare(password, data.password) && await bcrypt.compare(username, data.username)) {
      // Create jwtToken
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      data = data.toObject();
      data.token = token;
      //remove password in admin object
      data.username = undefined;
      data.password = undefined;
      //sending cooie with response
      const tokenExpiry = {
        expires: new Date(Date.now() + 5 * 60 * 1000),
      };
      res.cookie("cookie", token, tokenExpiry).status(200).json({
        success: true,
        token,
        data,
        message: "Admin login successfully",
      });
    } else {
      // Access denied - data unmatched!
      return res.status(500).json({
        success: false,
        message: "Provide correct details or visit to https://kodevana.com instead!",
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: "Login Failed!",
    });
  }
};


// Admin logout
exports.adminLogout = (req, res) => {
  try {
    // Clear the token by setting its expiration time to the past
    res.clearCookie("cookie").status(200).json({
      success: true,
      message: "Loged out successfully",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};


// Admin dashboard function
exports.adminDashboard = (req, res) => {
  try {
    // Check if the admin is authenticated
    if (!req.admin) {
      return res.status(401).json({
        success: false,
        message: "Access denied! Visit to https://kodevana.com instead!.",
      });
    }
    // Access the authenticated admin's information from the request object
    const data = req.admin;
    return res.status(200).json({
      success: true,
      message: "Admin access granted! Take resposibility of your actions",
      adminData: data,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while accessing the admin dashboard!.",
    });
  }
};



// Register admin
exports.registerAdmin = async (req, res) => {
  try {
    // Get data from the request body
    const { username, email, password } = req.body;
    // Check if admin exist
    const checkData = await Admin.findOne({ email });
    if (checkData) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists, login instead!",
      });
    }
    
    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create entry in the database
    const admin = await Admin.create({
      username,
      email,
      password: hashPassword
    });

    return res.status(200).json({
      success: true,
      data: admin,
      message: "Admin created successfully",
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      success: false,
      message: "Error creating new admin!",
    });
  }
};
