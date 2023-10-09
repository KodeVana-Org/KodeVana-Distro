import { Img } from "react-image";
import img1 from "../../../assets/Homeimg1.png";

function hero() {
  return (
    <div className="mb-7 xs:mb-9 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 h-fit section-gap bg-slate-900 overflow-hidden">

      <div className="md:grid lg:grid xl:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-0 text-center text-white">

        {/* Right Div */}
        <div className="h-fit px-10 xs:px-20 sm:px-48 md:px-0 lg:px-0 xl:px-0 order-1 md:order-2 lg:order-2 xl:order-2">
          <Img
            className=""
            src={img1}
            alt="Tech Graphics Image"
          />
        </div>

        {/* Left Div */}
        <div className="pb-5 xs:pb-7 sm:pb-0 md:pb-0 lg:pb-0 xl:pb-0 px-3 xs:px-5 sm:px-10 md:pl-20 lg:pl-20 xl:pl-20 md:pr-0 lg:pr-0 xl:pr-0 relative text-center pt-0 xs:pt-1 sm:pt-2 md:pt-5 lg:pt-16 xl:pt-16 order-2 md:order-1 lg:order-1 xl:order-1">
          <p className="text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-5 xs:leading-5 text-yellow-400">
            Empowering Your Digital Transformation with KodeVana
          </p>
          <p className="my-2 xs:my-2 sm:my-2 md:my-4 lg:my-7 xl:my-10 text-xs xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-xl font-semibold">
            Our team of expert developers and designers work tirelessly to create software solutions that are not only functional and effective, but beautiful and user-friendly as well.
          </p>
          <button className="btn transition duration-200 ease-in-out hover:bg-slate-500">
            Let's talk!
          </button>
        </div>
      </div>
    </div>
  );
}

export default hero;
