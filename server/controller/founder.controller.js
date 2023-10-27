const Blog = require('../model/employee.model.js');

// Get all founders
exports.getAllFounders = async (req, res) => {
  const { role } = req.body;
  try {
    const data = await Employee.find({ role });
    console.log('All founders retrieved');
    res.status(200).json(data);
  } catch (e) {
    console.log('Error retrieving founders data: ', e);
    res.status(500).json({ error: 'Internal Server Error!' });
  }
};
