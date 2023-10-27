import { useLocation } from 'react-router-dom';

function ViewBlog() {
  const { state } = useLocation();
  const blog = state.blog; // Access the blog data from the location state

  return (
    <div>
      <h2>{blog.title}</h2>
      <img src={blog.thumbnail} alt={blog.title} />
      <p>{blog.description}</p>
      <p>Category: {blog.category}</p>
      <p>Date: {blog.date}</p>
    </div>
  );
}

export default ViewBlog;
