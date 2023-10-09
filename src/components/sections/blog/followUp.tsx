import { Img } from "react-image"
import fb from "../../../assets/SocialIcons/Facebook-Logo.png"
import insta from "../../../assets/SocialIcons/Instagram-Logo.png"
import LnkdIn from "../../../assets/SocialIcons/LinkedIn-Logo.png"
import twtr from "../../../assets/SocialIcons/Twitter-Logo.png"

function followUp() {
  return (
    <div className="mx-40 pt-5 grid grid-cols-2">
      <div className="flex-wrap text-center">
        <h3 className="pb-3 text-h3">Subscribe to our daily updates</h3>
        <div className="relative w-4/5 rounded-2xl">
          <input className="px-7 py-3 w-11/12 text-para text-white rounded-2xl bg-slate-900" type="email" placeholder="Email" />
          <button className="px-10 py-3 text-para border bg-white border-slate-900 absolute right-0 rounded-2xl order-10">Subscribe</button>
        </div>
      </div>
      <div className="flex-wrap gap-7 text-center">
        <h3 className="pb-3 text-h3">Also, follow us on</h3>
        <button>
          <Img
            className="h-12"
            src={fb}
            alt="Tech Graphics Image"
          />
        </button>
        <button className="ml-2 mr-1">
          <Img
            className="h-12"
            src={insta}
            alt="Tech Graphics Image"
          />
        </button>
        <button className="ml-1 mr-2">
          <Img
            className="h-12"
            src={LnkdIn}
            alt="Tech Graphics Image"
          />
        </button>
        <button>
          <Img
            className="h-12"
            src={twtr}
            alt="Tech Graphics Image"
          />
        </button>
      </div>

    </div>
  )
}

export default followUp