import { Img } from "react-image";
import { data } from '../../assets/tech_icons/techIcons.js'

function Technologie() {
  return (
    <div className="section-gap">

      {/* <div id="slider" className="h-full w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"> */}

        
        <div className="relative flex items-center">
          {data.map((item) => {
            <Img
              className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-slate-100"
              src={item.img}
              alt={item.alt}
            />
          })}
        </div>

        
      {/* </div> */}
    </div>
  )
}

export default Technologie