import Blog_bg from "../../assets/Blog_bg.png"
import { NavLink } from "react-router-dom";


function Blogs() {

  return (
    <div className="mx-2 xs:mx-7 sm:mx-10 lg:mx-24 xl:mx-40 section-gap sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 md:gap-7">

      <h3 className="sm:hidden text-h3 text-slate-400">new</h3>
      <h2 className="pb-3 xs:pb-5 sm:pb-7 md:pb-10 text-h2 sm:hidden">Technology Expo</h2>

      {/* Right */}
      <div className="mt-2 sm:mt-7 mb-2 sm:mb-0 order-2">
        <img
          className="w-1/2 sm:w-full mx-auto"
          src={Blog_bg}
          alt="Facebook logo"
        />
      </div>

      {/* Left */}
      <div className=" md:col-span-1 lg:col-span-2">
        <h3 className="text-h3 text-slate-400 hidden sm:block">new</h3>
        <h2 className="pb-3 xs:pb-5 sm:pb-7 md:pb-10 text-h2 hidden sm:block">Technology Expo</h2>
        <p className="text-para">Welcome to the Kodevana Expo, where innovation meets craftsmanship. Our expertise lies in building cutting-edge products using the latest tech stack. We're committed to staying at the forefront of industry trends, ensuring that your projects are crafted with the most advanced tools and frameworks. Join us on a journey through the dynamic world of technology, where possibilities are endless and creativity knows no bounds. Let's explore the future with Kodevana, one tech stack at a time.</p>
        <NavLink to="/blog">
          <button className="mt-2 sm:mt-5 btn transition duration-200 ease-in-out hover:bg-slate-900">
            Read more!
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Blogs;
