import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faInbox,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";

function Form() {
  const [selectedAttachment, setSelectedAttachment] = useState<File | null>(null);

  const initialState = {
    firstName: "",
    email: "",
    message: "",
    attachment: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleAttachmentChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedAttachment(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          attachment: e.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mx-3 xs:mx-5 sm:mx-16 md:mx-24 lg:mx-32 xl:mx-40 section-gap justify-center">
      <div className="lg:w-4/5 xl:w-3/4 mx-auto">
        <h2 className="mt-2 xs:mt-3 sm:mt-3 md:mt-5 lg:mt-5 xl:mt-5 text-h2">Let's work together<span className="text-yellow-500">.</span></h2>
        <p className="mt-2 xs:mt-3 sm:mt-3 md:mt-5 lg:mt-5 xl:mt-5 text-para text-slate-500">or reach us via :
          <a className='text-slate-400 font-semibold hover:text-yellow-500' href="mailto:kodevana@gmail.com">
            {'\u00a0'}kodevana@gmail.com
          </a>
        </p>

        {/* Contact form */}
        <form action="">
          {/* Input field section */}
          <div className="">
            <div className="mt-3 xs:mt-5 sm:mt-5 md:mt-7 lg:mt-7 xl:mt-7 h-10 xs:h-12 sm:h-14 md:h-16 lg:h-16 xl:h-16 w-full relative rounded-xl">
              <input
                className="pl-5 xs:pl-7 sm:pl-7 md:pl-7 lg:pl-7 xl:pl-7 pr-12 xs:pr-14 sm:pr-16 md:pr-16 lg:pr-16 xl:pr-16 py-4 xs:py-4 sm:py-5 md:py-5 lg:py-5 xl:py-5 w-full h-full text-para tracking-wide font-semibold border-0 text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-xl transition duration-150"
                type="text"
                placeholder="Name"
                name="Name"
                required
              />
              <FontAwesomeIcon className='h-5 xs:h-6 sm:h-6 md:h-7 lg:h-7 xl:h-7 absolute right-5 top-1/4 text-slate-400 group-focus:text-yellow-400' icon={faAddressCard} />
            </div>
            <div className="mt-3 xs:mt-5 sm:mt-5 md:mt-7 lg:mt-7 xl:mt-7 h-10 xs:h-12 sm:h-14 md:h-16 lg:h-16 xl:h-16 w-full relative rounded-xl">
              <input
                className="pl-5 xs:pl-7 sm:pl-7 md:pl-7 lg:pl-7 xl:pl-7 pr-12 xs:pr-14 sm:pr-16 md:pr-16 lg:pr-16 xl:pr-16 py-4 xs:py-4 sm:py-5 md:py-5 lg:py-5 xl:py-5 w-full h-full text-para tracking-wide font-semibold border-0 text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-xl transition duration-150"
                type="email"
                placeholder="Email"
                name="Email"
                required
              />
              <FontAwesomeIcon className='h-5 xs:h-6 sm:h-6 md:h-7 lg:h-7 xl:h-7 absolute right-5 top-1/4 text-slate-400 group-focus:text-yellow-400' icon={faEnvelope} />
            </div>
            <div className="mt-3 xs:mt-5 sm:mt-5 md:mt-7 lg:mt-7 xl:mt-7 h-32 xs:h-36 sm:h-36 md:h-40 lg:h-44 xl:h-44 w-full relative rounded-xl">
              <textarea
                className="pl-5 xs:pl-7 sm:pl-7 md:pl-7 lg:pl-7 xl:pl-7 pr-12 xs:pr-14 sm:pr-16 md:pr-16 lg:pr-16 xl:pr-16 py-4 xs:py-4 sm:py-5 md:py-5 lg:py-5 xl:py-5 text-para tracking-wide font-semibold border-0 text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-xl resize-none scrollable-textarea transition duration-150"
                placeholder="Message"
                name="Message"
                required
              />
              <FontAwesomeIcon className='h-5 xs:h-6 sm:h-6 md:h-7 lg:h-7 xl:h-7 absolute right-5 top-5 text-slate-400 group-focus:text-yellow-400' icon={faInbox} />
            </div>
          </div>

          {/* Button section */}
          <div className="mt-3 xs:mt-5 sm:mt-5 md:mt-7 lg:mt-7 xl:mt-7 flex gap-5 w-full">
            <div className="relative h-10 xs:h-11 sm:h-12 md:h-14 lg:h-16 xl:h-16 w-1/2 rounded-full">

              <label className="relative inline-flex items-center px-3 xs:px-5 sm:px-7 md:px-7 lg:px-7 xl:px-7 text-h3 leading-4 w-full h-full text-slate-400 font-semibold bg-slate-100 hover:bg-slate-200 rounded-full text-center justify-center overflow-hidden transition duration-200">
                <FontAwesomeIcon className="mr-2" icon={faPaperclip} />{" "}
                {selectedAttachment ? selectedAttachment.name : "Add attachment"}
                <input
                  type="file"
                  className="hidden"
                  onChange={handleAttachmentChange}
                />
              </label>

            </div>
            <div className="relative h-10 xs:h-11 sm:h-12 md:h-14 lg:h-16 xl:h-16 w-1/2 rounded-full">
              <button type="submit" className="px-3 xs:px-5 sm:px-7 md:px-7 lg:px-7 xl:px-7 text-h3 leading-4 w-full h-full text-white hover:text-slate-100 font-semibold bg-yellow-400 hover:bg-slate-400 rounded-full transition duration-200">Send message</button>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Form