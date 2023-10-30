import { Img } from 'react-image';
import { useInView } from 'react-intersection-observer';
import { AllProjects } from '../../ApiCaller';

function LatestProject() {
  const recentProject = AllProjects();
  const [ref, inView] = useInView({
    threshold: 0,
  });

  // Check if recentProject is empty
  if (recentProject === 0) {
    return (
      <div className="text-center">
        <p className="text-yellow-500 text-2xl">Project not found!</p>
      </div>
    );
  }

  return (
    <div className="px-2 xs:px-7 sm:px-10 md:px-16 lg:px-24 xl:px-40 text-center section-gap bg-slate-900">
      <h2 className="py-3 xs:py-5 sm:py-5 md:py-7 lg:py-7 xl:py-7 text-h2 text-white">
        Projects done by <span className="text-yellow-400">Kode</span>Vana
      </h2>
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
          <p>{recentProject.duration} </p>
          <p className="text-para"> {recentProject.desc} </p>
        </div>
      </div>
    </div>
  );
}

export default LatestProject;
