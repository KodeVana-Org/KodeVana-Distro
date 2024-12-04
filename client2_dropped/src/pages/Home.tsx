import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import "../assets/styles/serviceAnimation.css";

function Home() {
  const handleWheel = (event: any) => {
    // Prevent vertical scrolling
    event.preventDefault();

    // Scroll horizontally
    const container = event.currentTarget;
    container.scrollLeft += event.deltaY;
  };

  return (
    <div
      onWheel={handleWheel}
      className="h-screen overflow-x-scroll overflow-y-hidden scrollba-hide whitespace-nowrap"
    >
      {/*
      <Navbar />
      <Hero />
            <section className="inline-block h-screen w-screen text-center justify-center content-center align-middle"></section>
       */}
      <Services />
    </div>
  );
}

export default Home;
