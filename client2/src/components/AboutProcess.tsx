import { useTheme } from "../context/ThemeContext";
import { ProcessL, ProcessD } from "../assets/icons";

function AboutProcess() {
  const { theme } = useTheme();

  return (
    <section className="pb-20">
      <div className="grid grid-cols-3 border-y-4 border-y-black dark:border-y-white">
        <div className="flex gap-7 p-7 text-5xl font-semibold row-span-2 bg-blue- border-r-2 border-r-black dark:border-r-white">
          <img
            className="w-10 mt-1 self-start"
            src={theme === "dark" ? ProcessD : ProcessL}
            alt=""
          />
          PROCESS
        </div>
        <div className="p-7 flex flex-col gap-16 justify-between border-b-2 border-b-black dark:border-b-white border-x-2 border-x-black dark:border-x-white">
          <span className="flex flex-col gap-3">
            <p className="text-2xl text-gray-400">(STAGE:1)</p>
            <h3 className="text-4xl">DISCOVER</h3>
          </span>
          <span className="flex flex-col gap-3">
            <p className="text-xl">Analysis</p>
            <p className="text-xl">In-dept interviews</p>
          </span>
          <p className="text-3xl">&#x2197;</p>
        </div>
        <div className="p-7 flex flex-col gap-16 justify-between border-b-2 border-b-black dark:border-b-white border-l-2 border-l-black dark:border-l-white">
          <span className="flex flex-col gap-3">
            <p className="text-2xl text-gray-400">(STAGE:2)</p>
            <h3 className="text-4xl">DEFINE</h3>
          </span>
          <span className="flex flex-col gap-3">
            <p className="text-xl">User persona</p>
            <p className="text-xl">User stories</p>
          </span>
          <p className="text-3xl">&#x2197;</p>
        </div>
        <div className="p-7 flex flex-col gap-16 justify-between border-x-2 border-x-black dark:border-x-white border-t-2 border-t-black dark:border-t-white">
          <span className="flex flex-col gap-3">
            <p className="text-2xl text-gray-400">(STAGE:3)</p>
            <h3 className="text-4xl">DEVELOP</h3>
          </span>
          <span className="flex flex-col gap-3">
            <p className="text-xl">Product hypothesis</p>
            <p className="text-xl">Prototype</p>
          </span>
          <p className="text-3xl">&#x2197;</p>
        </div>
        <div className="p-7 flex flex-col gap-16 justify-between border-l-2 border-l-black dark:border-l-white border-t-2 border-t-black dark:border-t-white">
          <span className="flex flex-col gap-3">
            <p className="text-2xl text-gray-400">(STAGE:4)</p>
            <h3 className="text-4xl">DELIVER</h3>
          </span>
          <span className="flex flex-col gap-3">
            <p className="text-xl">User interface</p>
            <p className="text-xl">UI kit</p>
            <p className="text-xl">Aduptive design</p>
          </span>
          <p className="text-3xl">&#x2197;</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProcess;
