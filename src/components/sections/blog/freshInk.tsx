import { Img } from "react-image"
import B_1 from "../../../assets/Blog-1.png"

function freshInk() {
  return (
    <div className="px-2 xs:px-7 sm:px-10 md:px-16 lg:px-24 xl:px-40 section-gap text-center bg-slate-900">
      <h2 className="py-3 xs:py-5 sm:py-5 md:py-7 lg:py-7 xl:py-7 text-h2 text-yellow-400">Blog Spot</h2>
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 xs:gap-3 sm:gap-5 md:gap-7 lg:gap-10 xl:gap-16">
        <div className="w-full order-2 xs:order-2 sm:order-1 md:order-1 lg:order-1 xl:order-1">
          <span className="text-h3 text-slate-400">Insight</span>
          <h3 className="text-h3 text-yellow-400">Role of Design in making user friendly apps</h3>
          <p className="my-2 xs:my-2 sm:my-2 md:my-4 lg:my-7 xl:my-10 text-para text-white">Discover how innovative apps and design can transform your productivity. Learn how to make exceptional user experience through cutting edge technology and design.
            A user guide to follow.</p>
        </div>
        <div className="w-full order-1 xs:order-1 sm:order-2 md:order-2 lg:order-2 xl:order-2">
          <Img
            className="mx-auto w-2/3 xs:w-1/2 sm:w-full md:w-full lg:w-full xl:w-full"
            src={B_1}
            alt="Tech Graphics Image"
          />
        </div>
      </div>
    </div>
  )
}

export default freshInk