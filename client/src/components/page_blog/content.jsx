import { Img } from 'react-image';
import { AllBlogs } from '../../ApiCaller';

const Content = () => {
  const allBlogs = AllBlogs();

  // View Blog
  const handleBlogClick = (blog) => {
    // Pass blog data to ViewBlog or perform any other action
  };

  if (allBlogs.length === 0) {
    return (
      <div className="pt-2 md:pt-7 section-gap text-center">
        <p className="text-yellow-500 text-2xl">Blog not found, please refresh this page!</p>
      </div>
    );
  }

  return (
    <div className="mt-10 mx-20 flex flex-wrap gap-1 section-gap text-center justify-evenly">
      {allBlogs.map((blog) => (
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
        </div>
      ))}
    </div>
  );
}

export default Content;
