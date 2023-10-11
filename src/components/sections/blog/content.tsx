import { Img } from "react-image"

import Blog_Img from "../../../assets/BlogImg.png"

function content() {
  return (
    <div className="mx-20 flex flex-wrap gap-1 section-gap justify-evenly">
      <div className="mt-10 w-1/4 rounded-md bg-slate-900 cursor-pointer">
        <div>
          <Img
            className="w-full overflow-hidden" // Task : Add a hover zoom effect on the image
            src={Blog_Img}
            alt="Blog Image"
          />
        </div>
        <div className="p-5">
          <p className="text-slate-400">Insight : <span>2 Sept 2023</span></p>
          <h3 className="py-3 text-h3 text-white">Role of UX Designer in making user friendly responsive designs for web apps and websites</h3>
          <p className="text-para text-white">Designing a design with friendly user experience plays a vital role in the experience a view experiences. follow for guide.</p>
        </div>
      </div>

      {/* ________________________TEST DIV________________________ */}
      
      <div className="mt-10 w-1/4 rounded-md bg-slate-900 cursor-pointer">
        <div>
          <Img
            className="w-full overflow-hidden" // Task : Add a hover zoom effect on the image
            src={Blog_Img}
            alt="Blog Image"
          />
        </div>
        <div className="p-5">
          <p className="text-slate-400">Insight : <span>2 Sept 2023</span></p>
          <h3 className="py-3 text-h3 text-white">Role of UX Designer in making user friendly responsive designs for web apps and websites</h3>
          <p className="text-para text-white">Designing a design with friendly user experience plays a vital role in the experience a view experiences. follow for guide.</p>
        </div>
      </div>
      <div className="mt-10 w-1/4 rounded-md bg-slate-900 cursor-pointer">
        <div>
          <Img
            className="w-full overflow-hidden" // Task : Add a hover zoom effect on the image
            src={Blog_Img}
            alt="Blog Image"
          />
        </div>
        <div className="p-5">
          <p className="text-slate-400">Insight : <span>2 Sept 2023</span></p>
          <h3 className="py-3 text-h3 text-white">Role of UX Designer in making user friendly responsive designs for web apps and websites</h3>
          <p className="text-para text-white">Designing a design with friendly user experience plays a vital role in the experience a view experiences. follow for guide.</p>
        </div>
      </div>
      <div className="mt-10 w-1/4 rounded-md bg-slate-900 cursor-pointer">
        <div>
          <Img
            className="w-full overflow-hidden" // Task : Add a hover zoom effect on the image
            src={Blog_Img}
            alt="Blog Image"
          />
        </div>
        <div className="p-5">
          <p className="text-slate-400">Insight : <span>2 Sept 2023</span></p>
          <h3 className="py-3 text-h3 text-white">Role of UX Designer in making user friendly responsive designs for web apps and websites</h3>
          <p className="text-para text-white">Designing a design with friendly user experience plays a vital role in the experience a view experiences. follow for guide.</p>
        </div>
      </div>
      <div className="mt-10 w-1/4 rounded-md bg-slate-900 cursor-pointer">
        <div>
          <Img
            className="w-full overflow-hidden" // Task : Add a hover zoom effect on the image
            src={Blog_Img}
            alt="Blog Image"
          />
        </div>
        <div className="p-5">
          <p className="text-slate-400">Insight : <span>2 Sept 2023</span></p>
          <h3 className="py-3 text-h3 text-white">Role of UX Designer in making user friendly responsive designs for web apps and websites</h3>
          <p className="text-para text-white">Designing a design with friendly user experience plays a vital role in the experience a view experiences. follow for guide.</p>
        </div>
      </div>
    </div>
  )
}

export default content