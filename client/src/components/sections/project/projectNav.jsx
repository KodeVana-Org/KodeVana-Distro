import { NavLink } from "react-router-dom"

function ProjectNav() {
  return (
    <div className="mt-1 xs:mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 relative w-full text-center pb-2 xs:pb-3 sm:pb-5 md:pb-5 lg:pb-7 xl:pb-7 bg-white">
      <nav className="mx-auto w-fit px-3 xs:px-3 sm:px-7 md:px-7 lg:px-7 xl:px-7 py-1 xs:py-2 sm:py-2 md:py-2 lg:py-3 xl:py-3 shadow-2xl rounded-lg bg-slate-950">
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

export default ProjectNav