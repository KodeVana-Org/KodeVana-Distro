const Blog = require('../model/blog.model.js');

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const data = await Blog.find({});
    console.log('All blogs retrieved');
    res.status(200).json(data);
  } catch (e) {
    console.log('Error retrieving blog data: ', e);
    res.status(500).json({ error: 'Internal Server Error!' });
  }
};
