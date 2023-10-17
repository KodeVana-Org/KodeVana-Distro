import { Img } from "react-image";
import { useInView } from 'react-intersection-observer';

import Globe from "../../../assets/Globe_img.png"
import App from "../../../assets//App.png"
import Ui_Ux from "../../../assets//UiUx_img.png"
import "../Animate.css"

const Services = () => {
  const [ref1, inView1] = useInView({
    threshold: 0,
  });
  const [ref2, inView2] = useInView({
    threshold: 0,
  });
  const [ref3, inView3] = useInView({
    threshold: 0,
  });

  return (
    <div className='mt-2 xs:mt-3 sm:mt-3 lg:mt-5 xl:mt-7 mx-2 xs:mx-7 sm:mx-10 lg:mx-24 xl:mx-40 section-gap text-center'>

      <h2 className="pb-3 xs:pb-5 sm:pb-7 md:pb-10 lg:pb-10 xl:pb-10 text-h2">Services We Do <span className="text-yellow-400">Best</span></h2>
      <div className="md:grid lg:grid xl:grid grid-cols-3 md:gap-7 lg:gap-14 xl:gap-16">
        <div ref={ref1} className={`animated-div-1 ${inView1 ? 'slide-in' : ''} mb-5 xs:mb-6 sm:mb-6 md:mb-0 lg:mb-0 xl:mb-0 px-1 xs:px-5 sm:px-7 md:px-4 lg:px-7 xl:px-7 py-3 xs:py-5 sm:py-7 md:py-10 lg:py-20 xl:py-20 h-full bg-slate-900 rounded-xl hover:drop-shadow-2xl order-1`}>
          <Img
            className="w-5 xs:w-7 sm:w-9 md:w-12 lg:w-12 xl:w-12 mx-auto mb-2 xs:mb-3 sm:mb-3 md:mb-7 lg:mb-10 xl:mb-10"
            src={Globe}
            alt="Globe Image"
          />
          <h3 className="pb-2 xs:pb-3 sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 text-h3 leading-3 xs:leading-4 sm:leading-5 text-yellow-400">Web development</h3>
          <p className="text-para text-white"> — Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptates?</p>
        </div>
        <div ref={ref2} className={`animated-div-2 ${inView2 ? 'slide-in' : ''} mb-5 xs:mb-6 sm:mb-6 md:mb-0 lg:mb-0 xl:mb-0 px-1 xs:px-5 sm:px-7 md:px-4 lg:px-7 xl:px-7 py-3 xs:py-5 sm:py-7 md:py-10 lg:py-20 xl:py-20 h-full bg-slate-900 rounded-xl hover:drop-shadow-2xl order-2`}>
          <Img
            className="w-5 xs:w-7 sm:w-9 md:w-12 lg:w-12 xl:w-12 mx-auto mb-2 xs:mb-3 sm:mb-3 md:mb-7 lg:mb-10 xl:mb-10"
            src={App}
            alt="App Image"
          />
          <h3 className="pb-2 xs:pb-3 sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 text-h3 leading-3 xs:leading-4 sm:leading-5 text-yellow-400">App development</h3>
          <p className="text-para text-white"> — Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi blanditiis, commodi dolore facilis voluptatum!</p>
        </div>
        <div ref={ref3} className={`animated-div-3 ${inView3 ? 'slide-in' : ''} px-1 xs:px-5 sm:px-7 md:px-4 lg:px-7 xl:px-7 py-3 xs:py-5 sm:py-7 md:py-10 lg:py-20 xl:py-20 h-full bg-slate-900 rounded-xl hover:drop-shadow-2xl order-3`}>
          <Img
            className="w-5 xs:w-7 sm:w-9 md:w-12 lg:w-12 xl:w-12 mx-auto mb-2 xs:mb-3 sm:mb-3 md:mb-7 lg:mb-10 xl:mb-10"
            src={Ui_Ux}
            alt="UI/UX Image"
          />
          <h3 className="pb-2 xs:pb-3 sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 text-h3 leading-3 xs:leading-4 sm:leading-5 text-yellow-400">UI & UX design</h3>
          <p className="text-para text-white"> — Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod assumenda autem ex?</p>
        </div>
      </div>
    </div>
  )
}

export default Services
