import { ChangeEvent, FormEvent } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faEnvelope, faInbox, faPaperclip } from '@fortawesome/free-solid-svg-icons'

function form() {
  // function handleSubmit(event: FormEvent<HTMLFormElement>): void {
  //   throw new Error("Function not implemented.")
  // }

  // function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
  //   throw new Error("Function not implemented.")
  // }

  // function handleAttachmentChange(event: ChangeEvent<HTMLInputElement>): void {
  //   throw new Error("Function not implemented.")
  // }

  return (
    <div className="mx-40 section-gap justify-center">
      <div className="w-1/2 justify-center">
        <h2 className="mt-5 text-h2">Let's work together<span className="text-yellow-500">.</span></h2>
        <p className="mt-5 text-para text-slate-500">or reach us via : 
          <a className='text-slate-400 font-semibold hover:text-yellow-500' href="mailto:kodevana@gmail.com">
            {'\u00a0'}kodevana@gmail.com
          </a>
        </p>
        {/* Input field section */}
        <div className="">
          <div className="mt-7 h-16 w-full relative rounded-xl">
            <input className="px-7 py-5 w-full h-full border-none text-xl font-semibold text-slate-400 bg-slate-100 hover:bg-slate-200 rounded-xl" type="text" name="Name" required />
            <label className="text-xl absolute left-7 top-1/4 text-slate-400 font-semibold" htmlFor="Name">Name</label>
            <FontAwesomeIcon className='h-7 absolute right-5 top-1/4 text-slate-400' icon={faAddressCard} />
          </div>
          <div className="mt-7 h-16 w-full relative rounded-xl">
            <input className="px-7 py-5 w-full h-full border-none text-xl font-semibold text-slate-400 bg-slate-100 hover:bg-slate-200 rounded-xl" type="email" name="Email" required />
            <label className="text-xl absolute left-7 top-1/4 text-slate-400 font-semibold" htmlFor="Email">Email</label>
            <FontAwesomeIcon className='h-7 absolute right-5 top-1/4 text-slate-400' icon={faEnvelope} />
          </div>
          <div className="mt-7 h-44 w-full relative rounded-xl">
            <textarea className="px-7 py-5 w-full h-full border-none text-xl font-semibold text-slate-400 bg-slate-100 hover:bg-slate-200 rounded-xl" name="Message" required />
            <label className="text-xl absolute left-7 top-5 text-slate-400 font-semibold" htmlFor="Message">Message</label>
            <FontAwesomeIcon className='h-7 absolute right-5 top-5 text-slate-400' icon={faInbox} />
          </div>
        </div>
        {/* Button section */}
        <div className="mt-7 flex gap-5 w-full">
          <div className="relative h-16 w-1/2 rounded-full">
            <button className="px-7 py-3 text-xl w-full h-full text-slate-400 font-semibold bg-slate-100 hover:bg-slate-200 rounded-full">
              <FontAwesomeIcon className='mr-2' icon={faPaperclip} />
              Add attachment
            </button>
          </div>
          <div className="relative h-16 w-1/2 rounded-full">
            <button className="px-7 py-3 text-xl w-full h-full text-white hover:text-yellow-400 font-semibold bg-yellow-400 hover:bg-slate-200 rounded-full">Send message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default form