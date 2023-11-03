import React, { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";

import '../../styles/Animate.css'

function Content() {
  const [projects, setProjects] = useState({ projects: [] });
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://kodevana.com:8002/admin/getallProjects"
        );
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects.projects
      : projects.projects.filter(
        (project) => project.category === selectedCategory
      );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>

      <div className="section-gap text-center" >
        <div className="px-5 xs:px-7 sm:px-10 lg:px-24 xl:px-40 relative w-full text-center pb-7 mb-[106px] bg-slate-900">
          <h2 className="py-3 xs:py-5 sm:py-5 md:py-7 lg:py-7 xl:py-7 text-h2 text-slate-50">
            Projects done by <span className="text-yellow-400">Kode</span>Vana
          </h2>


          <nav className="mx-auto w-fit px-7 py-3 shadow-2xl rounded-lg bg-slate-950">
            <ul className="flex justify-center">
              <button
                onClick={() => handleCategorySelect("ALL")}
                className="projectNavLi group"
              >
                All
                <div className="projectNavUl"></div>
              </button>
              <button
                onClick={() => handleCategorySelect("WEB")}
                className="projectNavLi group"
              >
                Website
                <div className="projectNavUl"></div>
              </button>
              <button
                onClick={() => handleCategorySelect("APP")}
                className="projectNavLi group"
              >
                Application
                <div className="projectNavUl"></div>
              </button>
              <button
                onClick={() => handleCategorySelect("UX/UI")}
                className="projectNavLi group"
              >
                UI & UX
                <div className="projectNavUl"></div>
              </button>
            </ul>
          </nav>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="w-1/4 rounded-md cursor-pointer"
                >
                  <h3 className="text-h3">{project.title}</h3>
                  <p className="text-para">{project.desc}</p>
                  <Img
                    className="w-full overflow-hidden"
                    src={project.thumbnail.url}
                    alt={project.title}
                  />
                </div>
              ))
            ) : selectedCategory === "All" || "WEB" || "APP" || "UX/UI" ? (
              <div>
                <div className="px-40 text-center section-gap ">
                  <div className="grid grid-cols-5 gap-10">
                    <div
                      ref={ref}
                      className={`animated-div-1 ${inView ? "slide-in" : ""
                        } col-span-2`}
                    >
                    </div>
                    <div className=" text-black">
                      <h3 className="py-5 text-h3">Coming soon</h3>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-black">No projects in the {selectedCategory} category</div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Content;
