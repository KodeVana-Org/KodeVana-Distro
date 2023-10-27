const Blog = require('../model/blog.model.js');
const cloudinary = require('cloudinary').v2;

// Post blog to the database
exports.createBlog = async (req, res) => {
  try {
    const { thumbnail, title, desc, date, category } = req.body;
    // Check if required fields are provided
    if (!thumbnail || !title || !desc || !date || !category) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Please provide all required fields!",
        });
    }
    const thumbnailURl = await cloudinary.uploader.upload(thumbnail, {
      folder: 'blog'
    })
    const newBlog = new Blog({
      thumbnail: {
        url: thumbnailURl.secure_url,
      },
      title,
      desc,
      date,
      category
    });
    const blog = await newBlog.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Blog created successfully.",
        blog,
      });
  } catch (e) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error creating blog: ", e,
      });
  }
};

// Find a blog by title
exports.searchBlog = async (req, res) => {
  const { title } = req.body;
  try {
    const data = await Blog.findOne({ title });
    if (!data) {
      return res.status(404).json({ message: 'Blog not found!' });
    }
    res.status(200).json(data);
  } catch (e) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error finding blog: ", e,
      });
  }
};

// Update the blog entry by title
exports.updateBlog = async (req, res) => {
  const { title, newTitle, desc, thumbnail, date, category } = req.body;
  try {
    const data = await Blog.findOne({ title });
    if (!data) {
      return res.status(404).json({ message: 'Blog not found!' });
    }
    // Update the blog fields based on the request data
    if (title) data.title = newTitle;
    if (desc) data.desc = desc;
    if (thumbnail) data.thumbnail = await cloudinary.uploader.upload(thumbnail, {
      folder: 'blog'
    });
    if (date) data.date = date;
    if (category) data.category = category;
    const updatedBlog = await data.save();
    res.status(200).json(updatedBlog);
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error updating blog: ", e,
    });
  }
};

// Delete a blog by title
exports.deleteBlog = async (req, res) => {
  try {
    const { title } = req.body;
    const data = await Blog.findOne({ title });
    if (!data) {
      return res.status(404).json({ message: 'Blog not found!' });
    }
    await Blog.deleteOne({ title });
    res.json({ success: true, message: "Blog deleted successfully." });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error deleting blog: ", e,
    });
  }
};
