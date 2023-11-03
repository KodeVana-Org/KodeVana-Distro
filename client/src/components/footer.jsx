import { Img } from "react-image"
import { NavLink } from 'react-router-dom';
import Arrow_btn from "../assets/arrow-right.svg"
import Facebook_logo from "../assets/SocialIcons/Facebook-Logo.png"
import Instagram_logo from "../assets/SocialIcons/Instagram-Logo.png"
import Linkedin_logo from "../assets/SocialIcons/LinkedIn-Logo.png"
import Twitter_logo from "../assets/SocialIcons/Twitter-Logo.png"

function Footer() {
  return (
    <div className="px-5 sm:px-10 py-7 sm:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 sm:gap-2 lg:grid-cols-6 bg-slate-900">

      {/* Logo Section */}
      <div className="col-span-2 md:mr-12 lg:mx-16">
        <NavLink to="/">
          <h1 className="md:mb-4 lg:mb-7 text-2xl sm:text-4xl font-bold text-yellow-400">
            Kode<span className="text-slate-50">Vana</span>
          </h1>
        </NavLink>
        <p className="font-medium text-base sm:text-lg xl:text-xl text-slate-50">Our Team, Kodevana, encapsulates our drive for innovation, quality, and a holistic approach to problem-solving. With us, you're not just a client; you're a partner on an exciting journey to create remarkable digital experiences.</p>
      </div>

      {/* Links Section */}
      <div className="mt-2 md:mt-0">
        <h3 className="footer-h2">Links</h3>
        <div className="footer-h3 font-semibold">
          <NavLink className="hover:text-yellow-400" to="/">
            <p className="hover:translate-x-1 transition duration-300 py-1 lg:py-1.5 mb-1">
              Home
            </p>
          </NavLink>
          <NavLink className="hover:text-yellow-400" to="/Blog">
            <p className="hover:translate-x-1 transition duration-300 py-1 lg:py-1.5 mb-1">
              Blogs
            </p>
          </NavLink>
          <NavLink className="hover:text-yellow-400" to="/Project">
            <p className="hover:translate-x-1 transition duration-300 py-1 lg:py-1.5 mb-1">
              Projects
            </p>
          </NavLink>
          <NavLink className="hover:text-yellow-400" to="/About">
            <p className="hover:translate-x-1 transition duration-300 py-1 lg:py-1.5 mb-1">
              About us
            </p>
          </NavLink>
        </div>
      </div>

      {/* Service Section */}
      <div className="mt-2 md:mt-0">
        <h3 className="footer-h2">Services</h3>
        <div className="cursor-default">
          <p className="md:mb-1 lg:mb-3 footer-h3 font-semibold">&rarr; Web development</p>
          <p className="md:mb-1 lg:mb-3 footer-h3 font-semibold">&rarr; App development</p>
          <p className="md:mb-1 lg:mb-3 footer-h3 font-semibold">&rarr; UI & UX Design</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-2 md:mt-7 lg:mt-0 footer-h3 col-span-2 md:col-span-4 lg:col-span-2">
        <h3 className="footer-h2">Contacts</h3>
        <p className="mb-2 sm:mb-3">Drop your mail ID and our team will reach you shortly</p>
        <div className="mb-2 sm:mb-3 flex">
          <input className="h-7 sm:h-10 px-4 py-3 w-full sm:w-3/4 md:w-2/3 lg:w-3/4 font-semibold text-slate-600 outline-none rounded-l-md" type="mail" placeholder="Enter your mail ID" />
          <button type="submit">
            <Img
              className="h-7 sm:h-10 px-2 py-1 bg-slate-500 rounded-r-md"
              src={Arrow_btn}
              alt="Arrow Graphics"
            />
          </button>
        </div>
        <p className="mb-2 sm:mb-3">
          Or you can contact via mail :
          <a className='text-yellow-300' href="mailto:contact.kodevana@gmail.com">
            {'\u00a0'}contact.kodevana@gmail.com
          </a>
        </p>
        <p className="mb-2 sm:mb-3">
          +91 XXXXXXXXXX <span className="text-yellow-400">{'\u00a0'}{'\u00a0'}|{'\u00a0'}{'\u00a0'}</span>
          +91 XXXXXXXXXX
        </p>
        <div className="sm:flex">
          <p className="text-yellow-400">Connect with us :</p>

          <a href="https://www.facebook.com/profile.php?id=100089674457660&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <button className="ml-5">
              <Img
                className="w-8 h-8"
                src={Facebook_logo}
                alt="Facebook logo"
              />
            </button>
          </a>

          <a href="https://www.instagram.com/kodevana/" target="_blank" rel="noopener noreferrer">
            <button className="ml-5">
              <Img
                className="w-8 h-8"
                src={Instagram_logo}
                alt="Instagram logo"
              />
            </button>
          </a>

          <a href="https://www.linkedin.com/in/kodevana/" target="_blank" rel="noopener noreferrer">
            <button className="ml-5">
              <Img
                className="w-8 h-8"
                src={Linkedin_logo}
                alt="Linkedin logo"
              />
            </button>
          </a>

          <a href="https://www.twitter.com/kodevana/" target="_blank" rel="noopener noreferrer">
            <button className="ml-5">
              <Img
                className="w-8 h-8"
                src={Twitter_logo}
                alt="Twitter logo"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer