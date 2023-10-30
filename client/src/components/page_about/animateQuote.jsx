import { useInView } from 'react-intersection-observer';
import "../../styles/Animate.css"

function AnimateQuote() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  
  return (
    <div className="mx-2 xs:mx-7 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-40 w-2/3 xs:w-3/5 sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/3 section-gap">
      <div ref={ref} className={`animated-div-1 ${inView ? 'slide-in' : ''} px-3 py-7 xs:py-16 sm:py-24 md:py-32 lg:py-36 xl:py-40 relative text-center bg-slate-700 rounded-md`}>
        <h3 className="text-yellow-400 text-h3">Move fast and break things</h3>
        <p className="pt-3 pb-1 text-para text-white font-semibold">- Mark Zuckerberg</p>
        <p className="text-para text-white">Founder of Facebook</p>
      </div>
    </div>
  )
}

export default AnimateQuote