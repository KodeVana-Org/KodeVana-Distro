import { NavLink } from 'react-router-dom';
import Arrow_btn from "../assets/arrow-right.svg"
import Facebook_logo from "../assets/SocialIcons/Facebook-Logo.png"
import Instagram_logo from "../assets/SocialIcons/Instagram-Logo.png"
import Linkedin_logo from "../assets/SocialIcons/LinkedIn-Logo.png"
import Twitter_logo from "../assets/SocialIcons/Twitter-Logo.png"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import {baseUrl,port} from "./api"


function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      if (email.length < 12) {
        toast.info("Email is too short. Minimum 12 characters required", {
          position: "top-center",
          autoClose: 1000,
        });
      } else if (email.length > 60) {
        toast.info("Email is too long. Maximum 60 characters allowed", {
          position: "top-center",
          autoClose: 1000,
        });
      } else {
        console.log("Email is valid.");
        const apiUrl = `${baseUrl}:${port}/api/send_emails`;
        try {
          const response = await axios.post(apiUrl, { email });
          setSent(true);
          console.log('Email sent successfully:', response.data);
        } catch (error) {
          toast.error('Error sending email: ' + error.message, {
            position: "top-center",
            autoClose: 1000,
          });
        }
      }
    } else {
      toast.error("Invalid email format", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

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
          <input
          className="h-7 sm:h-10 md:h-10 lg:h-10 xl:h-10 px-4 py-2 w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-3/4 font-semibold text-slate-600 outline-none rounded-l-md"
          type="email"
          placeholder="Enter your mail ID"
          value={email}
          onChange={handleEmailChange}
          title="Enter a valid email address"
          minLength="12" 
          maxLength="60" 
        />
        <button onClick={sendEmail} type="submit">
          <img
            className="h-7 sm:h-10 px-2 py-1 bg-slate-500 rounded-r-md cursor-pointer"
            src={Arrow_btn}
            alt="Arrow Graphics"

          />
        </button>
        <ToastContainer />
        </div>
        <p className="mb-2 sm:mb-3">
          Or you can contact via mail :
          <a className='text-yellow-300' href="mailto:contact.kodevana@gmail.com">
            {'\u00a0'}contact.kodevana@gmail.com
          </a>
        </p>
        <p className="mb-2 sm:mb-3">
          +91 9365646114 <span className="text-yellow-400">{'\u00a0'}{'\u00a0'}|{'\u00a0'}{'\u00a0'}</span>
          +91 7002436557
        </p>
        <div className="sm:flex">
          <p className="text-yellow-400">Connect with us :</p>

          <a href="https://www.facebook.com/profile.php?id=100089674457660&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <button className="ml-5">
              <img
                className="w-8 h-8"
                src={Facebook_logo}
                alt="Facebook logo"
              />
            </button>
          </a>

          <a href="https://www.instagram.com/kodevana/" target="_blank" rel="noopener noreferrer">
            <button className="ml-5">
              <img
                className="w-8 h-8"
                src={Instagram_logo}
                alt="Instagram logo"
              />
            </button>
          </a>

          <a href="https://www.linkedin.com/in/kodevana/" target="_blank" rel="noopener noreferrer">
            <button className="ml-5">
              <img
                className="w-8 h-8"
                src={Linkedin_logo}
                alt="Linkedin logo"
              />
            </button>
          </a>

          <a href="https://www.twitter.com/kodevana/" target="_blank" rel="noopener noreferrer">
            <button className="ml-5">
              <img
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