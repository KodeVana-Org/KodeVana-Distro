import React from 'react';

// Define a type for the blog prop
interface Blog {
  _id: string;
  title: string;
  desc: string;
  date: string;
  category: string;
  thumbnail: string;
}

interface ViewBlogProps {
  blog: Blog;
}

const ViewBlog: React.FC<ViewBlogProps> = ({ blog }) => {
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.desc}</p>
      <p>Date: {blog.date}</p>
      <p>Category: {blog.category}</p>
      <img src={blog.thumbnail} alt={blog.title} />
    </div>
  );
};

export default ViewBlog;
