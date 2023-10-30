const Project = require('../model/project.model.js');

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const data = await Project.find({});
    console.log('All projects retrieved');
    res.status(200).json(data);
  } catch (e) {
    console.log('Error retrieving project data: ', e);
    res.status(500).json({ error: 'Internal Server Error!' });
  }
};
