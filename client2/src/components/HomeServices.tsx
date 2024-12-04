import { useState } from "react";
import { HomeHeroImg } from "../assets/images";

function HomeServices() {
  const [hoverUX, setHoverUX] = useState(false);
  const [hoverUI, setHoverUI] = useState(false);
  const [hoverAD, setHoverAD] = useState(false);
  const [hoverSD, setHoverSD] = useState(false);

  return (
    <section className="mx-1 md:mx-10 flex flex-col gap-3 md:gap-5">
      <div className="flex justify-between">
        <span className="text-[9.5vw] leading-none font-medium">
          <h1>UI/UX</h1>
          <h1>DESIGN</h1>
        </span>
        <span className="md:text-2xl flex gap-3 md:gap-7 items-end">
          <h3>research</h3>
          <h3>product design</h3>
        </span>
      </div>
      <img
        className="flex justify-center w-full aspect-[10/4]"
        src={HomeHeroImg}
        alt=""
      />
      <div className="h-[6rem] md:h-[10rem] lg:h-[13rem] xl:h-[18rem] my-3 md:my-7 lg:my-12 xl:my-16 text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl flex justify-between sm:justify-evenly overflow-hidden">
        <div className="flex flex-col justify-center leading-[.5rem] md:leading-[2rem] lg:leading-[3rem] xl:leading-[4.5rem]">
          <h3 className="py-3 cursor-pointer">CONSULTATION</h3>
          <h3
            className="py-3 cursor-pointer"
            onMouseEnter={() => setHoverUX(true)}
            onMouseLeave={() => setHoverUX(false)}
          >
            UX DESIGN
          </h3>
          <h3
            className="py-3 cursor-pointer"
            onMouseEnter={() => setHoverUI(true)}
            onMouseLeave={() => setHoverUI(false)}
          >
            UI DESIGN
          </h3>
        </div>
        <p
          className={`${hoverUX ? "translate-y-[2.1rem] md:translate-y-[3.7rem] lg:translate-y-[5rem] xl:translate-y-[6.7rem] duration-1000" : hoverUI ? "translate-y-[4.1rem] md:translate-y-[7.3rem] lg:translate-y-[9.5rem] xl:translate-y-[12.7rem] duration-1000" : "translate-y-[.1rem] md:translate-y-[.2rem] lg:translate-y-[.4rem] xl:translate-y-[.7rem] duration-1000"}`}
        >
          &#x21C0;
        </p>
        <div
          className={`flex flex-col gap-[3rem] md:gap-[7rem] lg:gap-[9.5rem] xl:gap-[18rem] ${hoverUX ? "-translate-y-[7.5rem] md:-translate-y-[12rem] lg:-translate-y-[14.5rem] xl:-translate-y-[22.5rem] duration-1000" : hoverUI ? "-translate-y-[14.5rem] md:-translate-y-[28rem] lg:-translate-y-[35.7rem] xl:-translate-y-[55.5rem] duration-1000" : "translate-y-[-1.5rem] md:translate-y-[-1rem] xl:translate-y-[.5rem] duration-1000"}`}
        >
          <span className="leading-[5rem]">
            <h3>UX Audit</h3>
          </span>
          <span className="leading-[1.3rem] md:leading-[3rem] lg:leading-[4rem] xl:leading-[5rem]">
            <h3>User Flow</h3>
            <h3>Low Fidelity Prototype</h3>
            <h3>Testing</h3>
          </span>
          <span className="leading-[1.3rem] md:leading-[3rem] xl:leading-[5rem]">
            <h3>High Fidelity Prototype</h3>
            <h3>Design System</h3>
            <h3>UI Animation</h3>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <span className="text-[9.5vw] leading-none font-medium">
          <h1>WEB & APP</h1>
          <h1>DEVELOPMENT</h1>
        </span>
        <img
          className="flex justify-center w-full aspect-[10/4]"
          src={HomeHeroImg}
          alt=""
        />
      </div>
      <div className="h-[8rem] sm:h-[6rem] md:h-[12rem] lg:h-[13rem] xl:h-[18.8rem] my-1 sm:my-3 md:my-7 lg:my-12 xl:my-16 text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl flex justify-between sm:justify-evenly overflow-hidden">
        <div className="flex flex-col justify-center leading-[.5rem] md:leading-[2rem] lg:leading-[3rem] xl:leading-[4.5rem]">
          <h3 className="py-3 cursor-pointer">RESEARCH</h3>
          <h3
            className="py-3 cursor-pointer"
            onMouseEnter={() => setHoverAD(true)}
            onMouseLeave={() => setHoverAD(false)}
          >
            SYSTEM DESIGN
          </h3>
          <h3
            className="py-3 leading-5 md:leading-8 xl:leading-[4rem] cursor-pointer"
            onMouseEnter={() => setHoverSD(true)}
            onMouseLeave={() => setHoverSD(false)}
          >
            SYSTEM DEVELOPMENT
          </h3>
        </div>
        <p
          className={`${hoverAD ? "translate-y-[2.5rem] sm:translate-y-[1.8rem] md:translate-y-[3.7rem] lg:translate-y-[5rem] xl:translate-y-[5.8rem] duration-1000" : hoverSD ? "translate-y-[5rem] sm:translate-y-[4.1rem] md:translate-y-[7.3rem] lg:translate-y-[9.5rem] xl:translate-y-[12.7rem] duration-1000" : "translate-y-[.3rem] sm:translate-y-[-.2rem] md:translate-y-[.2rem] lg:translate-y-[.4rem] xl:translate-y-[0rem] duration-1000"}`}
        >
          &#x21C0;
        </p>
        <div
          className={`flex flex-col gap-[5rem] md:gap-[7rem] lg:gap-[9.5rem] xl:gap-[18rem] ${hoverAD ? "-translate-y-[7.3rem] sm:-translate-y-[9.3rem] md:-translate-y-[13rem] lg:-translate-y-[17.5rem] xl:-translate-y-[28.5rem] duration-1000" : hoverSD ? "-translate-y-[17rem] sm:-translate-y-[20.2rem] md:-translate-y-[29rem] lg:-translate-y-[39rem] xl:-translate-y-[62rem] duration-1000" : "translate-y-[.3rem] sm:translate-y-[-.4rem] md:translate-y-[0rem] xl:translate-y-[-1rem] duration-1000"}`}
        >
          <span className="leading-[1.3rem] sm:leading-[2rem] md:leading-[3rem] lg:leading-[4rem] xl:leading-[5rem]">
            <h3>Market Analysis</h3>
            <h3>Define Target User</h3>
          </span>
          <span className="leading-[1.3rem] sm:leading-[2rem] md:leading-[3rem] lg:leading-[4rem] xl:leading-[5rem]">
            <h3>System Flow</h3>
            <h3>Data Stream</h3>
            <h3>System Reliability Test</h3>
          </span>
          <span className="leading-[1.3rem] sm:leading-[2rem] md:leading-[3rem] lg:leading-[4rem] xl:leading-[5rem]">
            <h3>Frontend Development</h3>
            <h3>Backend Development</h3>
            <h3>SEO Optimization</h3>
          </span>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
