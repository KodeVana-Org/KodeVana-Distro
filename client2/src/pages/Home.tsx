import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import {
  devImg,
  seoImg,
  administrationImg,
  consultancyImg,
} from "../../src/assets/index";

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
      className="h-screen overflow-x-scroll overflow-y-hidden scrollbar-hide whitespace-nowrap"
    >
      <Navbar />
      <section className="inline-block h-screen w-screen text-center justify-center content-center align-middle">
        <h1 className="text-[20vh] text-center font-GFS">CREATING</h1>
        <span className="flex flex-row mr-20 ml-60 justify-between content-center items-center text-center">
          <h1 className="text-[20vh] font-GFS">YOUR</h1>
          <h3 className="w-[40vh] text-left font-Josh whitespace-normal">
            "As innovators in the digital space, we aim to empower businesses by
            bringing their unique vision to life through cutting-edge web and
            app development. We believe that technology is a canvas for
            self-expression, where creativity meets functionality. Our mission
            is to craft digital experiences that not only reflect your brand's
            identity but also engage and inspire your audience."
          </h3>
        </span>
        <h1 className="text-[20vh] text-center font-GFS">VISION</h1>
      </section>
      <section className="inline-block h-screen w-screen text-center justify-center content-center align-middle bg-blue-600">
        <div className="flex flex-row h-full w-full font-sans text-4xl font-semibold">
          <span className="relative">
            <img className="h-full w-full" src={devImg} alt="development" />
            <p className="absolute bottom-5 right-5">DEVELOPMENT</p>
          </span>
          <span className="relative">
            <img className="h-full w-[40vh]" src={seoImg} alt="SEO" />
            <p className="absolute bottom-5 right-5">S</p>
          </span>
          <span className="relative">
            <img
              className="h-full w-[40vh]"
              src={administrationImg}
              alt="administration"
            />
            <p className="absolute bottom-5 right-5">A</p>
          </span>
          <span className="relative">
            <img
              className="h-full w-[40vh]"
              src={consultancyImg}
              alt="consultancy"
            />
            <p className="absolute bottom-5 right-5">C</p>
          </span>
        </div>
      </section>
      <section className="inline-block h-screen w-screen text-center justify-center content-center align-middle bg-red-800"></section>
    </div>
  );
}

export default Home;
