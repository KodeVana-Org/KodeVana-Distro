import { Img } from "react-image";
import { NavLink } from 'react-router-dom';
import { RecentBlog } from '../../../ApiCaller';

function FreshInk() {
  const recentBlog = RecentBlog();

  if (recentBlog.length === 0) {
    return (
      <div className="pt-2 md:pt-7 section-gap text-center bg-slate-900">
        <p className="text-yellow-500 text-2xl">Blog not found, please refresh this page!</p>
      </div>
    );
  }

  return (
    <div className="px-2 xs:px-7 sm:px-10 md:px-16 lg:px-24 xl:px-40 section-gap text-center bg-slate-900">
      <h2 className="py-3 xs:py-5 sm:py-5 md:py-7 lg:py-7 xl:py-7 text-h2 text-yellow-400">Blog Spot</h2>
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 xs:gap-3 sm:gap-5 md:gap-7 lg:gap-10 xl:gap-16">
        <div className="w-full">
          <h3 className="text-h3 text-yellow-400">{recentBlog.title}</h3>
          <p className="my-2 xs:my-2 sm:my-2 md:my-4 lg:my-7 xl:my-10 text-para text-white">{recentBlog.desc}</p>
          <NavLink to="">
            <button className="btn transition duration-200 ease-in-out hover:bg-slate-500">
              Read
            </button>
          </NavLink>
          <Img
            className="mx-auto w-2/3 xs:w-1/2 sm:w-full md:w-full lg:w-full xl:w-full"
            src={recentBlog.thumbnail}
            alt="Tech Graphics Image"
          />
        </div>
      </div>
    </div>
  );
}

export default FreshInk;
