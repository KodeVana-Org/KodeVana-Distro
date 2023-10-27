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

// Get recent three projects
exports.getRecentThreeProjects = async (req, res) => {
  try {
    const data = await Blog.find({}).sort({ createdAt: -1 }).limit(3);
    console.log('Recent projects retrieved');
    res.status(200).json(data);
  } catch (e) {
    console.log('Error retrieving recent three projects data: ', e);
  }
};

// Get recent project
exports.getRecentProject = async (req, res) => {
  try {
    const data = await Project.findOne().sort({ createdAt: -1 });
    console.log('Recent project retrieved');
    res.status(200).json(data);
  } catch (e) {
    console.log('Error retrieving recent project data: ', e);
  }
};
