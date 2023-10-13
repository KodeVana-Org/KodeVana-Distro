import { Img } from "react-image"

import P1_Img from "../../../assets/P2.png"

function content() {
  return (
    <div className="mt-10 mx-20 flex flex-wrap gap-1 section-gap justify-evenly">

      {/* Project div */}
      <div className="mt-10 w-1/4 rounded-md bg-slate-900 cursor-pointer">
        <div>
          <Img
            className="w-full overflow-hidden" // Task : Add a hover zoom effect on the image
            src={P1_Img}
            alt="Blog Image"
          />
        </div>
      </div>
    </div>
  )
}

export default content