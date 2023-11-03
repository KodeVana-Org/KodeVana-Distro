import { useInView } from 'react-intersection-observer';
import "../../styles/Animate.css"

function Content() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div className="mx-2 xs:mx-7 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-40 section-gap">
      <div className='md:grid grid-cols-2 gap-10'>
        <div ref={ref} className={`animated-div-1 ${inView ? 'slide-in' : ''} px-3 py-7 xs:py-16 sm:py-24 md:py-32 lg:py-36 xl:py-40 relative text-center bg-slate-700 rounded-md`}>
          <h3 className="text-yellow-400 text-h3">Move fast and break things</h3>
          <p className="pt-3 pb-1 text-para text-slate-50 font-semibold">- Mark Zuckerberg</p>
          <p className="text-para text-slate-50">Founder of Facebook</p>
        </div>
        <div>
          <h2 className='mt-3 md:mt-0 text-h2 mb-3 md:mb-5'>Know us more</h2>
          <p className="text-para">Our team of skilled professionals is committed to staying at the forefront of industry trends and technologies, allowing us to deliver innovative solutions that are both intuitive and efficient. Whether you require custom software development, creative design, or digital marketing services, we are dedicated to providing a seamless experience tailored to your unique needs.</p>
        </div>
      </div>
    </div>
  )
}

export default Content