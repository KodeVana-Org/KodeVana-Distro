import { useState } from "react";

function HomeContact() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNumberInput = (e: any) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  return (
    <section className="flex lg:flex-row flex-col gap-7 justify-evenly mx-7 md:mx-10 pb-20">
      <div className="flex flex-col sm:flex-row lg:flex-col gap-3 md:gap-7 xl:gap-16 text-2xl sm:text-3xl xl:text-5xl justify-evenly md:justify-start">
        <span className="leading-snug">
          <h3>Have a great idea?</h3>
          <h3>We are only few clicks away!</h3>
        </span>
        <span className="leading-snug">
          <h3>Contact us @</h3>
          <h3>+91 9678532346</h3>
          <h3>kodevana@gmail.com</h3>
        </span>
      </div>
      <div className="w-full flex flex-col gap-7">
        <div className="w-full flex flex-col md:flex-row justify-between gap-2 md:gap-7 text-xl sm:text-2xl xl:text-3xl">
          <span className="w-full">
            <p>Ph. number</p>
            <input
              className="w-full border-b border-black dark:border-white bg-white dark:bg-black outline-none no-spinner"
              type="text"
              value={phoneNumber}
              onInput={handleNumberInput}
            />
          </span>
          <span className="w-full">
            <p>Email</p>
            <input
              className="w-full border-b border-black dark:border-white bg-white dark:bg-black outline-none"
              type="email"
            />
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl">I'm interested in</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 text-xl md:text-2xl xl:text-4xl text-center">
          <h3 className="px-3 md:px-4 xl:px-5 py-2 md:py-4 xl:py-5 h-full items-center content-center bg-white text-black dark:bg-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black self-center border border-black dark:border-white rounded-[20vw] duration-500">
            Web development
          </h3>
          <h3 className="px-3 md:px-4 xl:px-5 py-2 md:py-4 xl:py-5 h-full items-center content-center bg-white text-black dark:bg-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black self-center border border-black dark:border-white rounded-[20vw] duration-500">
            App development
          </h3>
          <h3 className="px-3 md:px-4 xl:px-5 py-2 md:py-4 xl:py-5 h-full items-center content-center bg-white text-black dark:bg-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black self-center border border-black dark:border-white rounded-[20vw] duration-500">
            UI/UX design
          </h3>
          <h3 className="px-3 md:px-4 xl:px-5 py-2 md:py-4 xl:py-5 h-full items-center content-center bg-white text-black dark:bg-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black self-center border border-black dark:border-white rounded-[20vw] duration-500">
            Dev. from scratch
          </h3>
          <h3 className="px-3 md:px-4 xl:px-5 py-2 md:py-4 xl:py-5 h-full items-center content-center bg-white text-black dark:bg-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black self-center border border-black dark:border-white rounded-[20vw] duration-500">
            Maintenance
          </h3>
          <h3 className="px-3 md:px-4 xl:px-5 py-2 md:py-4 xl:py-5 h-full items-center content-center bg-white text-black dark:bg-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black self-center border border-black dark:border-white rounded-[20vw] duration-500">
            Others
          </h3>
        </div>
        <h3 className="text-2xl md:text-3xl">Budget</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xl md:text-2xl xl:text-4xl text-center">
          <h3 className="px-3 md:px-4 xl:px-5 py-2 md:py-4 xl:py-5 bg-white text-black dark:bg-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black self-center border border-black dark:border-white rounded-[20vw] duration-500">
            &lt;25,000
          </h3>
          <h3 className="px-3 md:px-4 xl:px-5 py-2 md:py-4 xl:py-5 bg-white text-black dark:bg-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black self-center border border-black dark:border-white rounded-[20vw] duration-500">
            25,000&lt;50,000
          </h3>
          <h3 className="px-3 md:px-4 xl:px-5 py-2 md:py-4 xl:py-5 bg-white text-black dark:bg-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black self-center border border-black dark:border-white rounded-[20vw] duration-500">
            Haven't decided
          </h3>
        </div>
        <p className="text-2xl md:text-3xl">Tell us more about your project</p>
        <input
          className="w-full text-3xl border-b border-black dark:border-white bg-white dark:bg-black outline-none"
          type="text"
        />
        <button className="relative mx-3 md:px-5 py-3 md:py-5 text-xl lg:text-3xl text-white dark:text-black bg-black dark:bg-white border border-black dark:border-white rounded-[5rem] overflow-hidden group">
          <span className="relative z-10 font-medium">CONNECT</span>
          <span className="absolute inset-0 bg-slate-900 dark:bg-gray-200 group-hover:translate-x-full duration-1000" />
        </button>
      </div>
    </section>
  );
}

export default HomeContact;
