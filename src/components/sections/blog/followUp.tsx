import { Img } from "react-image"
import fb_logo from "../../../assets/SocialIcons/Facebook-Logo.png"
import insta_logo from "../../../assets/SocialIcons/Instagram-Logo.png"
import LnkdIn_logo from "../../../assets/SocialIcons/LinkedIn-Logo.png"
import twtr_logo from "../../../assets/SocialIcons/Twitter-Logo.png"

function FollowUp() {
  return (
    <div className="mx-2 xs:mx-3 sm:mx-10 md:mx-12 lg:mx-24 xl:mx-40 pt-5 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      <div className="text-center md:col-span-2 lg:col-span-2 xl:col-span-2">
        <h3 className="pb-3 text-h3">Subscribe to our daily updates</h3>
        <div className="relative h-7 xs:h-10 sm:h-11 md:h-12 lg:h-14 xl:h-14 rounded-2xl">
          <input className="pl-3 xs:pl-3 sm:pl-5 md:pl-6 lg:pl-7 xl:pl-7 pr-20 xs:pr-28 sm:pr-28 md:pr-32 lg:pr-36 xl:pr-40 h-full w-11/12 text-para text-white rounded-2xl bg-slate-900" type="email" placeholder="Email" />
          <button className="px-2 xs:px-6 sm:px-7 md:px-8 lg:px-9 xl:px-10 h-full text-para border bg-white border-slate-900 absolute right-0 rounded-2xl order-10">Subscribe</button>
        </div>
      </div>
      <div className="mt-3 xs:mt-3 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 grid grid-rows-2 xs:grid-rows-1 sm:grid-rows-1 md:grid-rows-2 lg:grid-rows-2 xl:grid-rows-2 col-span-1 text-center">
          <h3 className="text-h3">Also, follow us on</h3>
        <div className="">
          <button>
            <Img
              className="h-7 xs:h-9 sm:h-10 md:h-9 lg:h-10 xl:h-10"
              src={fb_logo}
              alt="Tech Graphics Image"
            />
          </button>
          <button className="ml-2 mr-1">
            <Img
              className="h-7 xs:h-9 sm:h-10 md:h-9 lg:h-10 xl:h-10"
              src={insta_logo}
              alt="Tech Graphics Image"
            />
          </button>
          <button className="ml-1 mr-2">
            <Img
              className="h-7 xs:h-9 sm:h-10 md:h-9 lg:h-10 xl:h-10"
              src={LnkdIn_logo}
              alt="Tech Graphics Image"
            />
          </button>
          <button>
            <Img
              className="h-7 xs:h-9 sm:h-10 md:h-9 lg:h-10 xl:h-10"
              src={twtr_logo}
              alt="Tech Graphics Image"
            />
          </button>
        </div>
      </div>

    </div>
  )
}

export default FollowUp