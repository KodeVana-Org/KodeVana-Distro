import QualityOfService from "../../assets/quality1.png"
import CompPricing from "../../assets/pricing2.png"
import Customization from "../../assets/custom3.png"
import ModernTech from "../../assets/modern4.png"

function WhyUs() {
  return (
    <div className="mx-5 xs:mx-12 sm:mx-20 section-gap text-center">
      <h2 className="pb-3 xs:pb-5 sm:pb-7 md:pb-10 text-h2">Why <span className="text-yellow-400">Kode</span>Vana?</h2>
      <div className="flex flex-wrap justify-between">
        <div className="mb-5 xs:mb-6 md:w-1/2 lg:w-1/4">
          <img
            className="h-28 xs:h-32 sm:h-36 mx-auto"
            src={QualityOfService}
            alt="Workers Graphics Image"
          />
          <h3 className="py-2 xs:py-3 sm:py-5 text-h3">Quality of Service</h3>
          <p className="text-para">KodeVana delivering high-quality software services to its clients and a dedication to providing excellent customer service</p>
        </div>
        <div className="mb-5 xs:mb-6 md:w-1/2 lg:w-1/4 px-7">
          <img
            className="h-28 xs:h-32 sm:h-36 mx-auto"
            src={CompPricing}
            alt="Money Bank Graphics Image"
          />
          <h3 className="py-2 xs:py-3 sm:py-5 text-h3">Competitive Pricing</h3>
          <p className="text-para">KodeVana offer its services at a competitive price point, making it an attractive option for small and medium-sized businesses</p>
        </div>
        <div className="mb-5 xs:mb-6 md:w-1/2 lg:w-1/4 px-7">
          <img
            className="h-28 xs:h-32 sm:h-36 mx-auto"
            src={Customization}
            alt="Creativity Graphics Image"
          />
          <h3 className="py-2 xs:py-3 sm:py-5 text-h3">Customization</h3>
          <p className="text-para">KodeVana offer customized software solutions that are tailored to each clients unique needs and specifications</p>
        </div>
        <div className="md:w-1/2 lg:w-1/4 xl:w-1/4">
          <img
            className="h-28 xs:h-32 sm:h-36 mx-auto"
            src={ModernTech}
            alt="Tech Graphics Image"
          />
          <h3 className="py-2 xs:py-3 sm:py-5 text-h3">Cutting-Edge Technology</h3>
          <p className="text-para">Kodevana use the latest software development tools and technologies to deliver high-quality, modern software solutions</p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs