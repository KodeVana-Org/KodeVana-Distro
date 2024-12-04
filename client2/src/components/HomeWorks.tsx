import { Link } from "react-router-dom";
import { HomeHeroImg } from "../assets/images";

function HomeWorks() {
  return (
    <section className="flex flex-col gap-3 md:gap-5 mx-7 md:mx-10 pb-10 md:pb-16">
      <h1 className="text-[7vw]">Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2 relative flex justify-center">
          <img
            className="rounded-md w-full aspect-[10/4.5]"
            src={HomeHeroImg}
            alt=""
          />
          <span className="absolute text-white text-center bottom-[30%]">
            <h3 className="text-[4vw] lg:text-[3.5vw] mb-10">PROJECT NAME</h3>
            <Link
              className="text-[4vw] lg:text-[2vw] text-black px-5 md:px-7 py-1.5 md:py-3 bg-white rounded-full md:hover:px-8 hover:py-4 hover:bg-black hover:text-white duration-500"
              to={"/work1"}
            >
              Learn more
            </Link>
          </span>
          <span className="absolute bottom-5 left-5 px-1.5 md:px-3 py-1 md:py-2 rounded-full text-black bg-white hover:px-4 hover:py-3 hover:bg-black hover:text-white hover:bottom-4 hover:left-4 duration-500">
            &rarr;
          </span>
        </div>
        <div className="col-span-1 relative flex justify-center">
          <img
            className="rounded-md w-full aspect-[10/4.5] md:aspect-[5/4.5]"
            src={HomeHeroImg}
            alt=""
          />
          <span className="absolute text-white text-center bottom-[30%]">
            <h3 className="text-[3.5vw] mb-10">PROJECT NAME</h3>
            <Link
              className="text-[4vw] lg:text-[2vw] text-black px-5 md:px-7 py-1.5 md:py-3 bg-white rounded-full md:hover:px-8 hover:py-4 hover:bg-black hover:text-white duration-500"
              to={"/work2"}
            >
              Learn more
            </Link>
          </span>
          <span className="absolute bottom-5 left-5 px-1.5 md:px-3 py-1 md:py-2 rounded-full text-black bg-white hover:px-4 hover:py-3 hover:bg-black hover:text-white hover:bottom-4 hover:left-4 duration-500">
            &rarr;
          </span>
        </div>
        <div className="col-span-1 relative flex justify-center">
          <img
            className="rounded-md w-full aspect-[10/4.5]"
            src={HomeHeroImg}
            alt=""
          />
          <span className="absolute text-white text-center bottom-[30%]">
            <h3 className="text-[3.5vw] mb-10">PROJECT NAME</h3>
            <Link
              className="text-[4vw] lg:text-[2vw] text-black px-5 md:px-7 py-1.5 md:py-3 bg-white rounded-full md:hover:px-8 hover:py-4 hover:bg-black hover:text-white duration-500"
              to={"/work3"}
            >
              Learn more
            </Link>
          </span>
          <span className="absolute bottom-5 left-5 px-1.5 md:px-3 py-1 md:py-2 rounded-full text-black bg-white hover:px-4 hover:py-3 hover:bg-black hover:text-white hover:bottom-4 hover:left-4 duration-500">
            &rarr;
          </span>
        </div>
      </div>
    </section>
  );
}

export default HomeWorks;
