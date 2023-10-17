import { Img } from "react-image"
import { useInView } from 'react-intersection-observer';

import "../Animate.css"
import P_Img from "../../../assets/P1.png"

const CN = "First Client"  // Name of the client
const PD = "One quater year" // Project duration

function Crispy() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div className="px-40 text-center section-gap bg-slate-900">
      <div className="grid grid-cols-5 gap-10">
        <div ref={ref} className={`animated-div-1 ${inView ? 'slide-in' : ''} col-span-2`}>
          <Img
            className=""
            src={P_Img}
            alt="Tech Graphics Image"
          />
        </div>
        <div className="col-span-3 text-white">
          <h3 className="py-5 text-h3">Coming soon</h3>
          <p>Client : <span>{CN}</span></p>
          <p>Project duration : <span>{PD}</span></p>
          <p className="text-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio explicabo repellendus atque vel quidem aliquid odio magnam praesentium eligendi ad est provident mollitia harum dicta cupiditate at ea, hic adipisci voluptatem nisi libero vitae excepturi. Consectetur molestias qui, nobis autem accusantium dolorem? Ex ipsa odio voluptatem et quo, tempore ipsum totam ea doloribus qui mollitia accusantium perferendis, velit cum reprehenderit iure! Quisquam ipsa voluptate porro velit repellat iste excepturi itaque sequi nemo rerum eius a aut pariatur cumque obcaecati quibusdam sunt commodi assumenda, corporis sit similique quaerat. Autem animi iusto aperiam laudantium nesciunt atque tempora ea sint veritatis minima dolores maxime aliquam reprehenderit molestias provident, obcaecati culpa. Dolorem, nam id itaque repudiandae tempore non inventore vitae ut nisi deleniti repellendus maiores quisquam natus pariatur a error? Ea mollitia rem iusto quis non maxime aperiam, qui sit aut corrupti pariatur facere magnam accusamus vel ex eveniet ab veniam minima illo? Vel cupiditate numquam ut! Libero a ut sequi? Aliquam nostrum repellendus esse iure. Velit dolorum possimus adipisci voluptate delectus ea veniam debitis eius iusto error, blanditiis placeat aut architecto, ipsum hic fugiat eum ab quam quas amet soluta cumque. Illo culpa libero, quisquam corrupti doloremque incidunt blanditiis tenetur illum ipsa?</p>
        </div>
      </div>
    </div>
  )
}

export default Crispy