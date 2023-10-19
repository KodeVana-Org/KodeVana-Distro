import { Img } from "react-image"

function Employee() {
  return (
    <div>
      <div className="mx-5 xs:mx-7 sm:mx-10 lg:mx-16 xl:mx-20 flex flex-wrap gap-3 justify-center section-gap">
        <div className="p-3 w-2/3 xs:w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-2/12 bg-slate-200 rounded-md">
          <Img
            className="w-fit h-fit overflow-hidden"
            src="{}"
            alt=""
          />
          <h3 className="text-para">Employee Name</h3>
          <p className="text-para">Role</p>
        </div>
      </div>
    </div>
  )
}

export default Employee