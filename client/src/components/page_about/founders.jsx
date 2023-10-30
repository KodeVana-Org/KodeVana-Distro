import { Img } from "react-image";
import { AllFounders } from '../../ApiCaller';

function Founder() {
  const allFounders = AllFounders();

  if (allFounders === 0) {
    return (
      <div className="text-center">
        <p className="text-yellow-500 text-2xl">Error loading founders! please refresh this page</p>
      </div>
    );
  }


  return (
    <div className="mx-5 xs:mx-7 sm:mx-10 lg:mx-16 xl:mx-20 flex flex-wrap gap-3 justify-center section-gap">
      {allFounders.map((founder, index) => (
        <div key={index} className="p-3 w-2/3 xs:w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-2/12 bg-slate-200 rounded-md">
          <Img
            className="w-fit h-fit overflow-hidden"
            src={founder.photo}
            alt={founder.name}
          />
          <h3 className="text-para">{founder.name}</h3>
          <p className="text-para">{founder.role}</p>
        </div>
      ))}
    </div>
  );
}

export default Founder;
