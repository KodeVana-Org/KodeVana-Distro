import React from 'react';

// Define a type for the project prop
interface Project {
  _id: string;
  title: string;
  desc: string;
  duration: string;
  category: string;
  thumbnail: string;
}

interface ViewProjectProps {
  project: Project;
}

const ViewProject: React.FC<ViewProjectProps> = ({ project }) => {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.desc}</p>
      <p>Duration: {project.duration}</p>
      <p>Category: {project.category}</p>
      <img src={project.thumbnail} alt={project.title} />
    </div>
  );
};

export default ViewProject;
