const Project = require('../model/project.model.js');
const cloudinary = require('cloudinary').v2;

// Post project to the database
exports.createProject = async (req, res) => {
  try {
    const { thumbnail, title, desc, duration, category } = req.body;
    // Check if required fields are provided
    if (!thumbnail || !title || !desc || !duration || !category) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Please provide all required fields!",
        });
    }
    const thumbnailURl = await cloudinary.uploader.upload(thumbnail, {
      folder: 'project'
    })
    const newProject = new Project({
      thumbnail: {
        url: thumbnailURl.secure_url,
      },
      title,
      desc,
      duration,
      category
    });
    const project = await newProject.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Project created successfully.",
        project,
      });
  } catch (e) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error creating project: ", e,
      });
  }
};

// Find a project by title
exports.searchProject = async (req, res) => {
  const { title } = req.body;
  try {
    const data = await Project.findOne({ title });
    if (!data) {
      return res.status(404).json({ message: 'Project not found!' });
    }
    res.status(200).json(data);
  } catch (e) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error finding project: ", e,
      });
  }
};

// Update the project entry by title
exports.updateProject = async (req, res) => {
  const { title, newTitle, desc, thumbnail, duration, category } = req.body;
  try {
    const data = await Project.findOne({ title });
    if (!data) {
      return res.status(404).json({ message: 'Project not found!' });
    }
    // Update the project fields based on the request data
    if (title) data.title = newTitle;
    if (desc) data.desc = desc;
    if (thumbnail) data.thumbnail = await cloudinary.uploader.upload(thumbnail, {
      folder: 'project'
    });
    if (duration) data.duration = duration;
    if (category) data.category = category;
    const updatedProject = await data.save();
    res.status(200).json(updatedProject);
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error updating project: ", e,
    });
  }
};

// Delete a project by title
exports.deleteProject = async (req, res) => {
  try {
    const { title } = req.body;
    const data = await Project.findOne({ title });
    if (!data) {
      return res.status(404).json({ message: 'Project not found!' });
    }
    await Project.deleteOne({ title });
    res.json({ success: true, message: "Project deleted successfully." });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error deleting project: ", e,
    });
  }
};
