import React, { useState, useEffect } from 'react';
import { Img } from 'react-image';
import ViewBlog from '../../ViewBlog';
import P1_Img from "../../../assets/P2.png"   // Change this image with a not found sat emoji png yellow image

// Define a type for your blog data
interface Blog {
  _id: string;
  title: string;
  desc: string;
  date: string;
  category: string;
  thumbnail: string;
}

const Content: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch('/api/getAllBlogs')
      .then((response) => response.json())
      .then((data: Blog[]) => {
        setBlogs(data);
      })
      .catch((e) => {
        console.error('Error fetching blogs:', e);
      });
  }, []);

  // View Blog
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const handleBlogClick = (blog: Blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="mt-10 mx-20 flex flex-wrap gap-1 section-gap text-center justify-evenly">
      {blogs.length === 0 ? (
        // Default blog
        <div className="mt-10 w-1/4 rounded-md cursor-pointer">
          <div>
            <h3 className='text-para mb-3 text-red-700'>Please refresh your page!</h3>
            <Img
              className="w-full overflow-hidden" // Task : Add a hover zoom effect on the image
              src={P1_Img}
              alt="Blog Image"
            />
          </div>
        </div>
      ) : (
        // Map and display blogs
        blogs.map((blog) => (
          <div className="mt-10 w-1/4 rounded-md cursor-pointer" key={blog._id} onClick={() => handleBlogClick(blog)}>
            <div>
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <Img
                className="w-full overflow-hidden"
                src={blog.thumbnail}
                alt="Blog Image"
              />
            </div>
            {selectedBlog && <ViewBlog blog={selectedBlog} />}
          </div>
        ))
      )}
    </div>
  );
};

export default Content;