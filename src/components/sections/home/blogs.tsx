import { Img } from "react-image"
import Blog_bg from "../../../assets/Blog_bg.png"

function blogs() {
  return (
    <div className="mx-2 xs:mx-7 sm:mx-10 lg:mx-24 xl:mx-40 section-gap sm:grid md:grid lg:grid xl:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-5 md:gap-7 lg:gap-7 xl:gap-7">

        <h3 className="sm:hidden md:hidden lg:hidden xl:hidden text-h3 text-slate-400">new</h3>
        <h2 className="text-h2 sm:hidden md:hidden lg:hidden xl:hidden">Technology Expo</h2>

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
        <h2 className="text-h2 hidden sm:block md:block lg:block xl:block">Technology Expo</h2>
        <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dolor magnam porro voluptate numquam nam consectetur rem veniam iste amet impedit excepturi cupiditate maiores doloremque, corrupti, repellat eaque molestiae nostrum perferendis. Aliquid neque corrupti omnis distinctio sint! Ullam eligendi facere recusandae, non praesentium possimus, fugit vel ad iusto unde est ea fugiat officiis laudantium suscipit quos dolores dicta, asperiores doloribus.</p>
        <button className="mt-2 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5 btn transition duration-200 ease-in-out hover:bg-slate-900">
          Read more!
        </button>
      </div>
    </div>
  )
}

export default blogs