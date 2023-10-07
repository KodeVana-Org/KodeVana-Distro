import { Img } from "react-image"
import { Link } from "react-router-dom"
import Arrowbtn from "../../assets/arrow-right.svg"
import fb from "../../assets/SocialIcons/Facebook-Logo.png"
import insta from "../../assets/SocialIcons/Instagram-Logo.png"
import lnkdin from "../../assets/SocialIcons/LinkedIn-Logo.png"
import twtr from "../../assets/SocialIcons/Twitter-Logo.png"

function footer() {
  return (
    <div className="px-5 sm:px-10 md:px-10 lg:px-10 xl:px-10 py-7 sm:py-10 md:py-10 lg:py-10 xl:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 lg:grid-cols-6 xl:grid-cols-6 bg-slate-900">

      {/* Logo Section */}
      <div className="col-span-2 md:mr-12 lg:mx-16 xl:mx-16">
        <Link to="/">
          <h1 className="md:mb-4 lg:mb-7 xl:mb-7 text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-yellow-400">
            Kode<span className="text-white">Vana</span>
          </h1>
        </Link>
        <p className="font-medium text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam minima, laboriosam optio corporis fugiat saepe eligendi molestiae architecto inventore expedita.</p>
      </div>

      {/* Links Section */}
      <div className="mt-2 sm:mt-2 md:mt-0 lg:mt-0 xl:mt-0">
        <h3 className="footer-h2">Links</h3>
        <div className="footer-h3 font-semibold">
          <Link className="hover:text-yellow-400" to="/">
            <p className="transition duration-300 hover:translate-x-1 hover:tracking-wider md:mb-1 lg:mb-3 xl:mb-3">
              Home
            </p>
          </Link>
          <Link className="hover:text-yellow-400" to="/">
            <p className="transition duration-300 hover:translate-x-1 hover:tracking-wider md:mb-1 lg:mb-3 xl:mb-3">
              Blogs
            </p>
          </Link>
          <Link className="hover:text-yellow-400" to="/">
            <p className="transition duration-300 hover:translate-x-1 hover:tracking-wider md:mb-1 lg:mb-3 xl:mb-3">
              Freebies
            </p>
          </Link>
          <Link className="hover:text-yellow-400" to="/">
            <p className="transition duration-300 hover:translate-x-1 hover:tracking-wider md:mb-1 lg:mb-3 xl:mb-3">
              Projects
            </p>
          </Link>
          <Link className="hover:text-yellow-400" to="/">
            <p className="transition duration-300 hover:translate-x-1 hover:tracking-wider ">
              About us
            </p>
          </Link>
        </div>
      </div>

      {/* Service Section */}
      <div className="mt-2 sm:mt-2 md:mt-0 lg:mt-0 xl:mt-0">
        <h3 className="footer-h2">Services</h3>
        <div className="cursor-default">
          <p className="md:mb-1 lg:mb-3 xl:mb-3 footer-h3 font-semibold">Web development</p>
          <p className="md:mb-1 lg:mb-3 xl:mb-3 footer-h3 font-semibold">App development</p>
          <p className="md:mb-1 lg:mb-3 xl:mb-3 footer-h3 font-semibold">UI & UX Design</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-2 sm:mt-2 md:mt-7 lg:mt-0 xl:mt-0 footer-h3 col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-2 xl:col-span-2">
        <h3 className="footer-h2">Contacts</h3>
        <p className="md:mb-1 lg:mb-3 xl:mb-3">Drop your mail ID and our team will reach you shortly</p>
        <div className="md:mb-1 lg:mb-3 xl:mb-3 flex">
          <input className="h-7 sm:h-10 md:h-10 lg:h-10 xl:h-10 p-2 w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-3/4 font-semibold" type="mail" placeholder="Enter your mail ID" />
          <button type="submit">
            <Img
              className="h-7 sm:h-10 md:h-10 lg:h-10 xl:h-10 p-1 bg-slate-500"
              src={Arrowbtn}
              alt="Arrow Graphics"
            />
          </button>
        </div>
        <p className="md:mb-1 lg:mb-3 xl:mb-3">
          Or you can contact via mail :
          <a className='text-yellow-300' href="mailto:kodevana@gmail.com">
            {'\u00a0'}kodevana@gmail.com
          </a>
        </p>
        <p className="md:mb-1 lg:mb-3 xl:mb-3">
          +91 XXXXXXXXXX <span className="text-yellow-400">{'\u00a0'}{'\u00a0'}|{'\u00a0'}{'\u00a0'}</span>
          +91 XXXXXXXXXX
        </p>
        <div className="sm:flex md:flex lg:flex xl:flex">
          <p className="text-yellow-400">Connect with us :</p>
          <button className="ml-5 sm:ml-5 md:ml-5 lg:ml-5 xl:ml-5"> {/* Add Links */}
            <Img
              className="w-8 h-8"
              src={fb}
              alt="Facebook logo"
            />
          </button>
          <button className="ml-5 sm:ml-5 md:ml-5 lg:ml-5 xl:ml-5"> {/* Add Links */}
            <Img
              className="w-8 h-8"
              src={insta}
              alt="Instagram logo"
            />
          </button>
          <button className="ml-5 sm:ml-5 md:ml-5 lg:ml-5 xl:ml-5"> {/* Add Links */}
            <Img
              className="w-8 h-8"
              src={lnkdin}
              alt="Linkedin logo"
            />
          </button>
          <button className="ml-5 sm:ml-5 md:ml-5 lg:ml-5 xl:ml-5"> {/* Add Links */}
            <Img
              className="w-8 h-8"
              src={twtr}
              alt="Twitter logo"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default footer