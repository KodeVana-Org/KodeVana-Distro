import "../assets/styles/HomeAbout.css";

function HomeAbout() {
  return (
    <section className="flex flex-col gap-3 md:gap-5 xl:gap-14 pb-7 md:pb-12 xl:pb-20 mx-7">
      <div className="flex gap-28 items-center justify-evenly">
        <div>
          <h1 className="text-[9.5vw] font-semibold">About Us</h1>
          <div className="flex justify-between">
            <p className="w-[16rem] sm:w-[20rem] lg:w-[30rem] xl:w-[30rem] text-lg md:text-xl lg:text-3xl text-gray-400 leading-snug">
              "We create captivating websites and web apps with seamless design
              and functionality."
            </p>
            <span className="w-16 sm:w-10 md:w-20 xl:w-40 2xl:w-60 h-16 sm:h-10 md:h-20 xl:h-40 2xl:h-60 flex items-center justify-center text-xl sm:text-3xl md:text-5xl xl:text-7xl 2xl:text-9xl text-white dark:text-black font-thin bg-black dark:bg-white rounded-full">
              &rarr;
            </span>
          </div>
        </div>
        <div className="rotate1 relative md:w-[16rem] lg:w-[20rem] xl:w-[28rem] 2xl:w-[35rem] aspect-square border border-black dark:border-white rounded-full sm:flex justify-center items-center hidden">
          <span className="absolute top-[-8px] left-[50%] translate-x-[-50%] md:w-[.5rem] lg:w-[.8rem] xl:w-[1rem] 2xl:w-[1.5rem] aspect-square border border-black dark:border-white rounded-full bg-black dark:bg-white" />
          <span className="absolute top-[50%] right-[-8px] translate-y-[-50%] md:w-[.5rem] lg:w-[.8rem] xl:w-[1rem] 2xl:w-[1.5rem] aspect-square border border-black dark:border-white rounded-full bg-black dark:bg-white" />
          <span className="absolute bottom-[-8px] left-[50%] translate-x-[-50%] md:w-[.5rem] lg:w-[.8rem] xl:w-[1rem] 2xl:w-[1.5rem] aspect-square border border-black dark:border-white rounded-full bg-black dark:bg-white" />
          <span className="absolute top-[50%] left-[-8px] translate-y-[-50%] md:w-[.5rem] lg:w-[.8rem] xl:w-[1rem] 2xl:w-[1.5rem] aspect-square border border-black dark:border-white rounded-full bg-black dark:bg-white" />
          <div className="rotate2 relative md:w-[11rem] lg:w-[14rem] xl:w-[20rem] 2xl:w-[25rem] aspect-square border border-black dark:border-white rounded-full flex justify-center items-center">
            <span className="absolute top-[-8px] left-[50%] translate-x-[-50%] md:w-[.5rem] lg:w-[.8rem] xl:w-[1rem] 2xl:w-[1.5rem] aspect-square border border-black dark:border-white rounded-full bg-black dark:bg-white" />
            <span className="absolute top-[75%] right-[20px] md:w-[.5rem] lg:w-[.8rem] xl:w-[1rem] 2xl:w-[1.5rem] aspect-square border border-black dark:border-white rounded-full bg-black dark:bg-white" />
            <span className="absolute top-[75%] left-[20px] md:w-[.5rem] lg:w-[.8rem] xl:w-[1rem] 2xl:w-[1.5rem] aspect-square border border-black dark:border-white rounded-full bg-black dark:bg-white" />
            <div className="rotate3 relative md:w-[6rem] lg:w-[8rem] xl:w-[12rem] 2xl:w-[15rem] aspect-square border border-black dark:border-white rounded-full flex justify-center items-center">
              <span className="absolute top-[-8px] left-[50%] translate-x-[-50%] md:w-[.5rem] lg:w-[.8rem] xl:w-[1rem] 2xl:w-[1.5rem] aspect-square border border-black dark:border-white rounded-full bg-black dark:bg-white" />
              <span className="absolute bottom-[-8px] left-[50%] translate-x-[-50%] md:w-[.5rem] lg:w-[.8rem] xl:w-[1rem] 2xl:w-[1.5rem] aspect-square border border-black dark:border-white rounded-full bg-black dark:bg-white" />
              <span className="relative md:w-[1.5rem] lg:w-[2rem] xl:w-[3.5rem] 2xl:w-[5rem] aspect-square border border-black dark:border-white rounded-full flex justify-center items-center bg-black dark:bg-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:mx-7 flex flex-col">
        <p className="text-lg md:text-3xl xl:text-5xl leading-snug">
          Your creative partner, we enhance your web and app projects with
          strategic insights, engaging content, and expert design to meet your
          business goals.
        </p>
        <div className="flex gap-3 items-center">
          <span className="h-1 w-[100%] bg-black dark:bg-white" />
          <span className="px-2 py-4 w-8 md:w-12 h-7 md:h-10 flex items-center justify-center text-2xl text-white dark:text-black font-thin bg-black dark:bg-white rounded-full">
            &darr;
          </span>
          <p className="text-xl md:text-2xl text-gray-400 text-nowrap">
            scroll down
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
