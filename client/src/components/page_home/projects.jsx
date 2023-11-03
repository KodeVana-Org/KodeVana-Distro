import { Img } from 'react-image';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../../styles/Animate.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="mx-5 xs:mx-7 sm:mx-10 lg:mx-24 xl:mx-40 section-gap text-center">
      <h2 className="pb-3 xs:pb-5 sm:pb-7 md:pb-10 lg:pb-10 xl:pb-10 text-h2">Recent Projects</h2>
      <div className="flex flex-wrap gap-5 xs:gap-6 sm:gap-7 md:gap-10 lg:gap-14 xl:gap-20 justify-center">

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div >
            {projects && projects.projects && projects.projects.length > 0 ? (
              projects.projects.map((project, index) => (
                <div key={index} className="flex flex-wrap gap-5 xs:gap-6 sm:gap-7 md:gap-10 lg:gap-14 xl:gap-20 justify-center">
                  <div
                    ref={ref}
                    className={`animated-div-1 ${inView ? "slide-in" : ""
                      } relative w-full xs:w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 cursor-pointer group `}
                  >
                    <h1 className={`mx-3 xs:mx-3 sm:mx-3 md:mx-5 lg:mx-5 xl:mx-7 text-h3 absolute top-3 xs:top-5 sm:top-5 md:top-7 lg:top-7 xl:top-10 text-black`}>
                      {project.title}
                    </h1>


                    <Img
                      src={project.thumbnail.url}
                      className="h-full w-full transition duration-300 hover:opacity-30"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div>Comming Soon!</div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default Projects;
