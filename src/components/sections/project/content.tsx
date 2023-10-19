import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Img } from 'react-image';
import ViewProject from '../../ViewProject';

// Define project data type
interface Project {
  _id: string;
  title: string;
  desc: string;
  duration: string;
  category: string;
  thumbnail: string;
}

const Content: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/getAllProjects')
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="mx-20 flex flex-wrap gap-1 section-gap text-center justify-evenly">
      {projects.length === 0 ? (
        <h3 className='text-para'>We are coming with exciting projects soon...</h3>
      ) : (
        projects.map((project) => (
          <div className="w-1/4 rounded-md cursor-pointer" key={project._id} onClick={() => handleProjectClick(project)}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <Img
                className="w-full overflow-hidden"
                src={project.thumbnail}
                alt="Project Image"
              />
            </div>
            {selectedProject && <ViewProject project={selectedProject} />}
          </div>
        ))
      )}
    </div>
  );
};

export default Content;