import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Img } from 'react-image';
import { useInView } from 'react-intersection-observer';
import DefaultProjectImage from "../../../assets/P1.png";

interface ProjectData {
  title: string;
  client: string;
  duration: string;
  desc: string;
  thumbnail: string;
}

// Default Project varibale
const DefaultProjectTitile = "Title"
const defaultProjectDescription = "Write project description here"

function RecentProject() {
  const [recentProject, setRecentProject] = useState<ProjectData | null>(null);
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    // Fetch the recent project
    axios.get('http://localhost:8000/api/getRecentProject')
      .then((response) => {
        setRecentProject(response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching recent project:', error);
      });
  }, []);

  return (
    <div className="px-2 xs:px-7 sm:px-10 md:px-16 lg:px-24 xl:px-40 text-center section-gap bg-slate-900">
      <h2 className="py-3 xs:py-5 sm:py-5 md:py-7 lg:py-7 xl:py-7 text-h2 text-white">
        Projects done by <span className="text-yellow-400">Kode</span>Vana
      </h2>
      {recentProject ? (
        <div className="grid grid-cols-5 gap-2 xs:gap-3 sm:gap-5 md:gap-7 lg:gap-10 xl:gap-16">
          <div ref={ref} className={`animated-div-1 ${inView ? 'slide-in' : ''} col-span-2`}>
            <Img
              className=""
              src={recentProject.thumbnail}
              alt={recentProject.title}
            />
          </div>
          <div className="col-span-3 text-white">
            <h3 className="py-1 xs:py-3 sm:py-3 md:py-5 lg:py-5 xl:py-5 text-h3"> {recentProject.title} </h3>
            <p>Client: {recentProject.client} </p>
            <p>Project duration: {recentProject.duration} </p>
            <p className="text-para"> {recentProject.desc} </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-2 xs:gap-3 sm:gap-5 md:gap-7 lg:gap-10 xl:gap-16">
          <div ref={ref} className={`animated-div-1 ${inView ? 'slide-in' : ''} col-span-2`}>
            <Img
              className=""
              src={DefaultProjectImage}
              alt={DefaultProjectTitile}
            />
          </div>
          <div className="col-span-3 text-white">
            <h3 className="py-1 xs:py-3 sm:py-3 md:py-5 lg:py-5 xl:py-5 text-h3"> {DefaultProjectTitile} </h3>
            <p className="text-para"> {defaultProjectDescription} </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecentProject;
