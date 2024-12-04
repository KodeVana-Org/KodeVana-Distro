import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section className="lg:h-[100vh] sm:mt-14 lg:mt-0 mb-10 sm:mb-16 lg:mb-0 flex flex-col justify-center">
      <div className="font-medium flex items-center justify-evenly">
        <h1 className="text-[25vw] items-center content-center leading-none">
          WE
        </h1>
        <div className="text-[10.5vw] flex flex-col justify-between text-left content-center">
          <h2 className="leading-none">DESIGN</h2>
          <h2 className="leading-none">DEVELOP</h2>
        </div>
      </div>
      <div className="pt-12 xl:pt-36 lg:pt-28 grid grid-cols-2 md:text-lg lg:text-2xl -translate-x-5 sm:translate-x-0">
        <div className="text-right">
          <Link
            to={"/contact"}
            className="p-3 dark:text-white border-2 md:border-4 border-black dark:border-white"
          >
            Hire us
          </Link>
        </div>
        <div className="text-left">
          <Link
            to={"/works"}
            className="p-3 text-white dark:text-black bg-black dark:bg-white border-2 md:border-4 border-black dark:border-white"
          >
            Previous works
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
