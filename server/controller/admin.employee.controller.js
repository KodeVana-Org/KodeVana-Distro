const Employee = require('../model/employee.model.js');
const cloudinary = require('cloudinary').v2;

// Create new employee
exports.createEmployee = async (req, res) => {
  try {
    const { photo, name, role, joining, skills } = req.body;
    // Check if required fields are provided
    if (!photo || !name || !role || !joining || !skills) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Please provide all required fields!",
        });
    }
    const result = await cloudinary.uploader.upload(photo, {
      folder: 'employee'
    })
    const newEmployee = new Employee({
      photo: {
        url: result.secure_url,
      },
      name,
      role,
      joining,
      skills
    });
    const employee = await newEmployee.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Employee created successfully.",
        employee,
      });
  } catch (e) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error creating employee: ", e,
      });
  }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
  const { name } = req.body;
  try {
    const data = await Employee.find({ name });
    console.log('All employees retrieved');
    res.status(200).json(data);
  } catch (e) {
    console.log('Error retrieving employees data: ', e);
    res.status(500).json({ error: 'Internal Server Error!' });
  }
};

// Find an employee by name
exports.searchEmployee = async (req, res) => {
  const { name } = req.body;
  try {
    const data = await Employee.findOne({ name });
    if (!data) {
      return res.status(404).json({ message: 'Employee not found!' });
    }
    res.status(200).json(data);
  } catch (e) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error finding employee: ", e,
      });
  }
};

// Update the employee entry by name
exports.updateEmployee = async (req, res) => {
  const { name, newName, role, photo, joining, skills } = req.body; // Assuming these fields can be updated
  try {
    const data = await Employee.findOne({ name });
    if (!data) {
      return res.status(404).json({ message: 'Employee not found!' });
    }
    // Update the employee fields based on the request data
    if (name) data.name = newName;
    if (role) data.role = role;
    if (photo) data.photo = photo;
    if (joining) data.joining = joining;
    if (skills) data.skills = skills;
    const updatedEmployee = await data.save();
    res.status(200).json(updatedEmployee);
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error deleting employee: ", e,
    });
  }
};

// Delete a employee by name
exports.deleteEmployee = async (req, res) => {
  try {
    const { name } = req.body;
    const data = await Employee.findOne({ name });
    if (!data) {
      return res.status(404).json({ message: 'Employee not found!' });
    }
    await Employee.deleteOne({ name });
    res.json({ success: true, message: "Employee deleted successfully." });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error deleting employee: ", e,
    });
  }
};
