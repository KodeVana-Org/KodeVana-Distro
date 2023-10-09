import { ChangeEvent, FormEvent } from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faEnvelope, faInbox, faPaperclip } from '@fortawesome/free-solid-svg-icons'

function form() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.")
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.")
  }

  function handleAttachmentChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.")
  }

  return (
    <div className="contact container">
          <div className="container">
            {/* <div className="left"> */}
              <div className="form-wrapper">
                <div className="contact-heading">
                  <h1>Let's work together<span>.</span></h1>
                  <p className='text'>or reach us via : <NavLink to="mailto:kodevana@gmail.com">kodevana@gmail.com</NavLink></p>
                </div>
                <form onSubmit={handleSubmit} className="contact-form">
                
                  <div className="input-wrap">
                    <input type="text" className="contact-input" autoComplete='off' name='Name'value={formData.Name} placeholder='.' required  onChange={handleInputChange}/>
                    <label htmlFor='Name'>Name</label>
                    <FontAwesomeIcon className='icon' icon={faAddressCard} />
                  </div>
                 
                  <div className="input-wrap w-100">
                    <input type="email" className="contact-input" autoComplete='off' name='email' value={formData.email} placeholder='.' required  onChange={handleInputChange}/>
                    <label htmlFor='email'>Email</label>
                    <FontAwesomeIcon className='icon' icon={faEnvelope} />
                  </div>
                  <div className="input-wrap textarea w-100">
                    <textarea className="contact-input" autoComplete='off' name="message" value={formData.message} placeholder='.' required  onChange={handleInputChange}></textarea>
                    <label htmlFor='message'>Message</label>
                    <FontAwesomeIcon className='icon' icon={faInbox} />
                  </div>
                  <div className="contact-buttons">
                    <button className="btn1 upload">
                      <span>
                        <FontAwesomeIcon icon={faPaperclip} /> Add attachment
                      </span>
                      <input type="file" className="attachment" onChange={handleAttachmentChange}/>
                    </button>
                    <input type="submit" value="Send message" className='btn1'/>
                  </div>
                </form>
              </div>
            {/* </div> */}
          </div>
        </div>
  )
}

export default form