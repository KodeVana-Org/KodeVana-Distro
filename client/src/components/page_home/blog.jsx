import { Img } from "react-image";
import { AllBlogs } from '../../ApiCaller';

function Blogs() {
  const recentBlog = AllBlogs();

  if (recentBlog.length === 0) {
    return (
      <div className="section-gap text-center">
        <p className="text-yellow-500 text-2xl">Blog not found, please refresh this page!</p>
      </div>
    );
  }

  return (
    <div className="mx-2 xs:mx-7 sm:mx-10 lg:mx-24 xl:mx-40 section-gap sm:grid md:grid lg:grid xl:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-5 md:gap-7 lg:gap-7 xl:gap-7">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Blog Image */}
        <div className="mt-2 sm:mt-7 md:mt-7 lg:mt-7 xl:mt-7 mb-2 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 order-2">
          <Img
            className="w-1/2 sm:w-full md:w-full lg:w-full xl:w-full mx-auto"
            src={recentBlog.thumbnailUrl}
            alt={recentBlog.title}
          />
        </div>

        {/* Blog Content */}
        <div className="md:col-span-1 lg:col-span-2 xl:col-span-2 p-5">
          <h3 className="text-h3 text-slate-400 hidden sm:block md:block lg:block xl:block">New</h3>
          <h2 className="pb-3 xs:pb-5 sm:pb-7 md:pb-10 lg:pb-10 xl:pb-10 text-h2 hidden sm:block md:block lg:block xl:block">{recentBlog.title}</h2>

          {/* Slice and add ellipsis to the description */}
          <p className="text-para">
            {recentBlog.description.length > 100
              ? recentBlog.description.slice(0, 100) + "..."
              : recentBlog.description}
          </p>

          <button className="mt-2 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5 btn transition duration-200 ease-in-out hover:bg-slate-900">
            Read more!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
