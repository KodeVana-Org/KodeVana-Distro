import {  useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faInbox,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";


function Form() {
  const [selectedAttachment, setSelectedAttachment] = useState(null);

  const initialState = {
    name: "",
    email: "",
    message: "",
    attachment: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleTextareaChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAttachmentChange = async (event) => {
    const file = event.target.files && event.target.files[0];
    setSelectedAttachment(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          attachment: e.target?.result,
        }));
      };
      reader.readAsDataURL(file);
    };
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://kodevana.com:8002/api/submit",
        formData
      );

      if (response.status === 201) {
        toast.success("Form submitted successfully!", {
          position: "top-center",
        });
        resetFormData();
        console.log("Message sent successfully");
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  const resetFormData = () => {
    setFormData(initialState);
  };


  return (
<div className="mx-3 xs:mx-5 sm:mx-16 md:mx-24 lg:mx-32 xl:mx-40 section-gap justify-center">
    <div className="lg:w-4/5 xl:w-3/4 mx-auto">
      <h2 className="mt-2 xs:mt-3 md:mt-5 text-h2">Let's work together<span className="text-yellow-500">.</span></h2>
      <p className="mt-2 xs:mt-3 md:mt-5 text-para text-slate-500">or reach us via :
        <a className='text-yellow-500 font-semibold hover:text-slate-500' href="mailto:contact.kodevana@gmail.com">
          {'\u00a0'}contact.kodevana@gmail.com
        </a>
      </p>
        <form onSubmit={handleSubmit}>
          <div className="">
      
            <div className="mt-3 xs:mt-5 md:mt-7 h-10 xs:h-12 sm:h-14 md:h-16 w-full relative rounded-xl">
              <input
                className="pl-5 xs:pl-7 pr-12 xs:pr-14 sm:pr-16 py-4 sm:py-5 w-full h-full text-para tracking-wide font-semibold border-0 text-slate-500 bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 rounded-xl transition duration-150 outline-none"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                required
                onChange={handleInputChange}
              />
              <FontAwesomeIcon className='h-5 xs:h-6 md:h-7 absolute right-5 top-1/4 text-slate-400 group-focus:text-yellow-400' icon={faAddressCard} />
            </div>
            

            <div className="mt-3 xs:mt-5 md:mt-7 h-10 xs:h-12 sm:h-14 md:h-16 w-full relative rounded-xl">
              <input
                className="pl-5 xs:pl-7 pr-12 xs:pr-14 sm:pr-16 py-4 sm:py-5 w-full h-full text-para tracking-wide font-semibold border-0 text-slate-500 bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 rounded-xl transition duration-150 outline-none"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <FontAwesomeIcon className='h-5 xs:h-6 md:h-7 absolute right-5 top-1/4 text-slate-400 group-focus:text-yellow-400' icon={faEnvelope} />
            </div>

            <div className="mt-7 h-44 w-full relative rounded-xl">
              <textarea
                className="pl-5 xs:pl-7 pr-12 xs:pr-14 sm:pr-16 py-4 sm:py-5 text-para tracking-wide font-semibold border-0 text-slate-500 bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 rounded-xl resize-none scrollable-textarea transition duration-150 outline-none"
                placeholder="Message"
                name="message"
                value={formData.message}
                required
                onChange={handleTextareaChange}
              />
             
              <FontAwesomeIcon className="h-7 absolute right-5 top-5 text-slate-400" icon={faInbox} />
            </div>
            

          </div>
          <div className="mt-3 xs:mt-5 md:mt-7 flex gap-5 w-full">
            <div className="relative h-10 xs:h-11 sm:h-12 md:h-14 lg:h-16 w-1/2 rounded-full">
            {/* <label className={`btn1 upload ${selectedAttachment ? "selected-button" : ""}`}> */}
            <label className="relative inline-flex items-center px-3 xs:px-5 sm:px-7 text-h3 leading-4 w-full h-full text-slate-400 font-semibold bg-slate-200 hover:text-slate-50 hover:bg-slate-500 rounded-full text-center justify-center transition duration-150 overflow-hidden">
            <FontAwesomeIcon className="mr-2" icon={faPaperclip} />{" "}
                {selectedAttachment ? selectedAttachment.name : "Add attachment"}
              <input type="file" className="hidden" onChange={handleAttachmentChange} />
            </label>
            </div>
            <div className="relative h-10 xs:h-11 sm:h-12 md:h-14 lg:h-16 w-1/2 rounded-full">
              <button type="submit" className="px-3 xs:px-5 sm:px-7 text-h3 leading-4 w-full h-full text-slate-50 hover:text-slate-100 font-semibold bg-yellow-400 hover:bg-slate-500 rounded-full transition duration-200">Send message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
