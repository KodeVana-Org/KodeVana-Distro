import { Img } from "react-image";
import Blog_bg from "../../assets/Blog_bg.png"
import { NavLink } from "react-router-dom";


function Blogs() {

  return (
    <div className="mx-2 xs:mx-7 sm:mx-10 lg:mx-24 xl:mx-40 section-gap sm:grid md:grid lg:grid xl:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-5 md:gap-7 lg:gap-7 xl:gap-7">

      <h3 className="sm:hidden md:hidden lg:hidden xl:hidden text-h3 text-slate-400">new</h3>
      <h2 className="pb-3 xs:pb-5 sm:pb-7 md:pb-10 lg:pb-10 xl:pb-10 text-h2 sm:hidden md:hidden lg:hidden xl:hidden">Technology Expo</h2>

      {/* Right */}
      <div className="mt-2 sm:mt-7 md:mt-7 lg:mt-7 xl:mt-7 mb-2 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 order-2">
        <Img
          className="w-1/2 sm:w-full md:w-full lg:w-full xl:w-full mx-auto"
          src={Blog_bg}
          alt="Facebook logo"
        />
      </div>

      {/* Left */}
      <div className=" md:col-span-1 lg:col-span-2 xl:col-span-2">
        <h3 className="text-h3 text-slate-400 hidden sm:block md:block lg:block xl:block">new</h3>
        <h2 className="pb-3 xs:pb-5 sm:pb-7 md:pb-10 lg:pb-10 xl:pb-10 text-h2 hidden sm:block md:block lg:block xl:block">Technology Expo</h2>
        <p className="text-para">Welcome to the Kodevana Expo, where innovation meets craftsmanship. Our expertise lies in building cutting-edge products using the latest tech stack. We're committed to staying at the forefront of industry trends, ensuring that your projects are crafted with the most advanced tools and frameworks. Join us on a journey through the dynamic world of technology, where possibilities are endless and creativity knows no bounds. Let's explore the future with Kodevana, one tech stack at a time.</p>
        <NavLink to="/blog">
          <button className="mt-2 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5 btn transition duration-200 ease-in-out hover:bg-slate-900">
            Read more!
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Blogs;
