import { useState, useEffect, useRef } from "react";
import { images } from "../assets/servicesData/index";
import "../assets/styles/serviceAnimation.css";

function Services() {
  const [hovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  const hoverTimeoutRef = useRef<number | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current !== null) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = window.setTimeout(() => setHovered(false), 200);
  };

  const handleWheel = () => {
    if (scrollTimeoutRef.current !== null) {
      clearTimeout(scrollTimeoutRef.current);
    }
    setScrolling(true);

    scrollTimeoutRef.current = window.setTimeout(
      () => setScrolling(false),
      500,
    );
  };

  useEffect(() => {
    let interval: number | undefined;
    if (!hovered && !scrolling) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
      }, 1500);
    }

    return () => clearInterval(interval);
  }, [hovered, scrolling, images.length]);

  const orderedServices = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
    images[(currentIndex + 3) % images.length],
  ];

  return (
    <section
      className="inline-block h-screen w-screen text-center justify-center content-center align-middle"
      onWheel={handleWheel}
    >
      <div className="relative flex flex-row h-full w-screen font-sans text-4xl font-semibold">
        {orderedServices.map((service, index) => (
          <span
            key={service.id}
            className={`relative w-[21%] hover:w-[37%] ${
              !hovered && !scrolling
                ? index === 0
                  ? "auto-slide-1 w-[37%]"
                  : index === 1
                    ? "auto-slide-2"
                    : "auto-slide"
                : ""
            } transition-all duration-300 group overflow-x-hidden`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="h-full w-full object-cover"
              src={service.image}
              alt={service.label.toLowerCase()}
            />
            <p
              className={`absolute bottom-5 right-5 ${
                !hovered && !scrolling
                  ? index === 0
                    ? "slidein-text"
                    : index === 1
                      ? "slideout-text"
                      : ""
                  : ""
              } group-hover:opacity-0 transition-all duration-300`}
            >
              {service.shortLabel}
            </p>
            <h3
              className={`absolute bottom-5 right-5 opacity-0 ${
                !hovered && !scrolling
                  ? index === 0
                    ? "slideout-text"
                    : index === 1
                      ? "slidein-text"
                      : ""
                  : ""
              } group-hover:opacity-100 transition-all duration-300`}
            >
              {service.label}
            </h3>
          </span>
        ))}
      </div>
    </section>
  );
}

export default Services;
