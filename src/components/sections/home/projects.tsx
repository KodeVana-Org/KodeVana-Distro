import { Img } from "react-image"
import p_1 from "../../../assets/P1.png"
import p_2 from "../../../assets/P2.png"
import p_3 from "../../../assets/P3.png"
// Title of projects
const projectTile1 = "Coming soon"
const projectTile2 = "Coming soon"
const projectTile3 = "Coming soon"
// Images of projects
const projectImg1 = "Import project one image here"
const projectImg2 = "Import project two image here"
const projectImg3 = "Import project three image here"
// Description of projects
const ellipsis = "..."
const projectDesc1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ad iure itaque labore id velit ipsam distinctio!" + ellipsis
const projectDesc2 = projectDesc1
const projectDesc3 = projectDesc1

function projects() {
  return (
    <div className="mx-5 xs:mx-7 sm:mx-10 lg:mx-24 xl:mx-40 section-gap text-center">
      <h2 className="text-h2">Recent Projects</h2>
      <div className="flex flex-wrap gap-5 xs:gap-6 sm:gap-7 md:gap-10 lg:gap-14 xl:gap-20 justify-center">
        <div className="relative w-full xs:w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 cursor-pointer group">
          <h1 className="mx-3 xs:mx-3 sm:mx-3 md:mx-5 lg:mx-5 xl:mx-7 text-h3 absolute top-3 xs:top-5 sm:top-5 md:top-7 lg:top-7 xl:top-10 text-black">
            {projectTile1}
          </h1>
          <p className="text-para mx-3 xs:mx-5 md:mx-3 lg:mx-5 xl:mx-5 absolute top-1/4 hidden group-hover:block transition duration-200">
            {projectDesc1}
          </p>
          <Img
            className="transition duration-300 hover:opacity-30"
            src={p_1}
            alt="Website background image graphics"
          />
        </div>
        <div className="relative w-full xs:w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 cursor-pointer group">
          <h1 className="mx-3 sm:mx-3 md:mx-5 lg:mx-5 xl:mx-7 text-h3 absolute top-3 xs:top-5 sm:top-5 md:top-7 lg:top-7 xl:top-10 text-black">
            {projectTile2}
          </h1>
          <p className="text-para mx-3 xs:mx-5 md:mx-3 lg:mx-5 xl:mx-5 absolute top-1/4 hidden group-hover:block transition duration-200">
            {projectDesc2}
          </p>
          <Img
            className="transition duration-300 hover:opacity-30"
            src={p_2}
            alt="Website background image graphics"
          />
        </div>
        <div className="relative w-full xs:w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 cursor-pointer group">
          <h1 className="mx-3 sm:mx-3 md:mx-5 lg:mx-5 xl:mx-7 text-h3 absolute top-3 xs:top-5 sm:top-5 md:top-7 lg:top-7 xl:top-10 text-black">
            {projectTile3}
          </h1>
          <p className="text-para mx-3 xs:mx-5 md:mx-3 lg:mx-5 xl:mx-5 absolute top-1/4 hidden group-hover:block transition duration-200 line-clamp-5">
            {projectDesc3}
          </p>
          <Img
            className="transition duration-300 hover:opacity-30"
            src={p_3}
            alt="Website background image graphics"
          />
        </div>
      </div>
    </div>
  )
}

export default projects
