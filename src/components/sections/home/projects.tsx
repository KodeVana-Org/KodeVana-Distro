import { Img } from "react-image"
import P_img from "../../../assets/P1.png"
// Title of projects
const projectTile1 = "Coming soon"
// Images of projects
const projectImg1 = "Import project one image here"
// Description of projects
const ellipsis = "..."
const projectDesc1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ad iure itaque labore id velit ipsam distinctio!" + ellipsis

function projects() {
  return (
    <div className="mx-5 xs:mx-7 sm:mx-10 lg:mx-24 xl:mx-40 section-gap text-center">
      <h2 className="pb-3 xs:pb-5 sm:pb-7 md:pb-10 lg:pb-10 xl:pb-10 text-h2">Recent Projects</h2>
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
            src={P_img}
            alt="Website background image graphics"
          />
        </div>
      </div>
    </div>
  )
}

export default projects
