import { Img } from "react-image"
import B_1 from "../../../assets/Blog-1.png"

function freshInk() {
  return (
    <div className="px-40 section-gap text-center bg-slate-900">
      <h2 className="py-3 xs:py-5 sm:py-5 md:py-7 lg:py-7 xl:py-7 text-h2 text-yellow-400">Blog Spot</h2>
      <div className="flex gap-16">
        <div className="w-1/2">
          <span className="text-h3 text-slate-400">Insight</span>
          <h3 className="text-h3 text-yellow-400">Role of Design in making user friendly apps</h3>
          <p className="my-2 xs:my-2 sm:my-2 md:my-4 lg:my-7 xl:my-10 text-para text-white">Discover how innovative apps and design can transform your productivity. Learn how to make exceptional user experience through cutting edge technology and design.
            A user guide to follow.</p>
        </div>
        <div className="w-1/2">
          <Img
            className=""
            src={B_1}
            alt="Tech Graphics Image"
          />
        </div>

      </div>
    </div>
  )
}

export default freshInk