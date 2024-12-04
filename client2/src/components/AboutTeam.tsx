import { useRef } from "react";
import { AboutHeroBgD } from "../assets/images";

function AboutTeam() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pb-20">
      <div className="px-36">
        <div className="mb-[3.5rem]">
          <h3 className="text-3xl mb-5">TEAM</h3>
          <p className="text-4xl leading-snug">
            "Meet our team. We value open communication and keep you involved
            every step of the way. Your satisfaction is our priority, and we are
            dedicated to delivering exceptional results that exceed your
            expectations."
          </p>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll no-scrollbar snap-x snap-mandatory"
        >
          <div className="w-screen flex-shrink-0 flex items-center justify-evenly snap-center">
            <h3 className="text-3xl">@warry</h3>
            <img
              className="w-[30rem] aspect-[4/5]"
              src={AboutHeroBgD}
              alt="profile"
            />
            <h3 className="text-3xl">DEVELOPER</h3>
          </div>
          <div className="w-screen flex-shrink-0 flex items-center justify-evenly snap-center">
            <h3 className="text-3xl">@dineshonly</h3>
            <img
              className="w-[30rem] aspect-[4/5]"
              src={AboutHeroBgD}
              alt="profile"
            />
            <h3 className="text-3xl">DEVELOPER</h3>
          </div>
          <div className="w-screen flex-shrink-0 flex items-center justify-evenly snap-center">
            <h3 className="text-3xl">@hemen</h3>
            <img
              className="w-[30rem] aspect-[4/5]"
              src={AboutHeroBgD}
              alt="profile"
            />
            <h3 className="text-3xl">DESIGNER</h3>
          </div>
        </div>

        <div className="flex text-7xl font-thin justify-between mt-5">
          <button onClick={scrollPrev}>&larr;</button>
          <button onClick={scrollNext}>&rarr;</button>
        </div>
      </div>
    </section>
  );
}

export default AboutTeam;
