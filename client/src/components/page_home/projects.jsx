import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {baseUrl,port} from "../api"

import '../../styles/Animate.css';
import '../../styles/loadingAnimation.css'

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${baseUrl}:${port}/admin/getallProjects`);
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        // console.error("Error fetching projects:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="mx-5 xs:mx-7 sm:mx-10 lg:mx-24 xl:mx-40 section-gap text-center">
      <h2 className="pb-3 xs:pb-5 sm:pb-7 md:pb-10 text-h2">Recent Projects</h2>

      {loading ? (
        <div className="loading-container">
          <div className="loading-dots">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-5 xs:gap-6 sm:gap-7 md:gap-10 lg:gap-14 xl:gap-20 justify-center">
          {projects && projects.projects && projects.projects.length > 0 ? (
            projects.projects.slice(-3).map((project, index) => (
              <div
                key={index}
                ref={ref}
                className={`animated-div-${index + 1} ${inView ? "slide-in" : ""} relative w-full sm:w-1/3 md:w-1/4 cursor-pointer group`}
              >
                <h1 className="mx-3 md:mx-5 xl:mx-7 text-h3 absolute top-3 xs:top-5 md:top-7 xl:top-10 text-black">
                  {project.title}
                </h1>
                <p className="text-para mx-3 xs:mx-5 md:mx-3 lg:mx-5 absolute top-1/4 hidden group-hover:block transition duration-200">
                  {project.desc}
                </p>
                <img
                  className="transition duration-300 hover:opacity-30"
                  src={project.thumbnail.url}
                  alt={project.title}
                />
              </div>
            ))
          ) : (
            <div>Coming Soon!</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Projects;
