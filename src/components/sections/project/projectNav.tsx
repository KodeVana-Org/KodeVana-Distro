import { NavLink } from "react-router-dom"

function projectNav() {
  return (
    <div className="relative w-full text-center pb-7 bg-slate-900">
      <h2 className="py-3 xs:py-5 sm:py-5 md:py-7 lg:py-7 xl:py-7 text-h2 text-white">Projects done by <span className="text-yellow-400">Kode</span>Vana</h2>
      <nav className="mx-auto w-fit px-7 py-3 shadow-2xl rounded-lg bg-slate-950">
        <ul className="flex justify-center">
          <NavLink
            to="#"
          >
            <li className="projectNavLi group">
              All
              <div className="projectNavUl"></div>
            </li>
          </NavLink>
          <NavLink
            to="#"
          >
            <li className="projectNavLi group">
              Website
              <div className="projectNavUl"></div>
            </li>
          </NavLink>
          <NavLink
            to="#"
          >
            <li className="projectNavLi group">
              Software
              <div className="projectNavUl"></div>
            </li>
          </NavLink>
          <NavLink
            to="#"
          >
            <li className="projectNavLi group">
              Application
              <div className="projectNavUl"></div>
            </li>
          </NavLink>
          <NavLink
            to="#"
          >
            <li className="projectNavLi group">
              UI & UX
              <div className="projectNavUl"></div>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default projectNav