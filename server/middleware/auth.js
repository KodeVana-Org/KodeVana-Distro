const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../model/admin.model");

exports.auth = (req, res, next) => {
  try {
    const token = req.cookies.cookie;

    if (!token || token == undefined) {
      return res.status(500).json({
        success: false,
        message: "Please login first",
        auth: false // Set auth to false for unsuccessful authentication
      });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      next()
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Token is invalid",
        auth: false // Set auth to false for unsuccessful authentication
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      auth: false // Set auth to false for unsuccessful authentication
    });
  }
};
