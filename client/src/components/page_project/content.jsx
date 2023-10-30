import { Img } from 'react-image';
import { AllProjects } from '../../ApiCaller';
// import ViewProject from '../../ViewProject';

const Content = () => {
  const allProjects = AllProjects();

  const handleProjectClick = (project) => {
    // Handle project click
  };

  if (allProjects === 0) {
    return (
      <div className="text-center">
        <p className="text-yellow-500 text-2xl">Project not found! please refresh this page</p>
      </div>
    );
  }

  return (
    <div className="mx-20 flex flex-wrap gap-1 section-gap text-center justify-evenly">
      {allProjects.map((project, index) => (
        <div key={index} className="w-1/4 rounded-md cursor-pointer" onClick={() => handleProjectClick(project)}>
          <div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <Img
              className="w-full overflow-hidden"
              src={project.thumbnail}
              alt={project.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
