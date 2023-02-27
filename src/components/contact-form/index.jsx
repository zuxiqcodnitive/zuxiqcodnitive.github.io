import React, { Fragment } from "react"
import { useForm } from "react-hook-form"
import { send } from "emailjs-com"

const ContactForm = () => {
  const { register, errors, getValues, formState } = useForm({
    mode: "onBlur",
  })
  const sendEmail = (e) => {
    e.preventDefault() // prevents the page from reloading when you hit “Send”

    send(
      "service_6tuknpp",
      "template_mp3svs6",
      getValues(),
      "299f8pKq9u2Q7gWmB"
    ).then(
      (result) => {
        // show the user a success message
      },
      (error) => {
        // show the user an error
      }
    )
  }
  return (
    <Fragment>
      <form id="contactForm" className="row" onSubmit={sendEmail}>
        <div className="col-12 col-sm-6 mb-7">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Your Name*"
            ref={register({ required: "Name is required" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="col-12 col-sm-6 mb-7">
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder="Your Email*"
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="col-12 mb-9">
          <textarea
            className="form-control massage-control"
            name="message"
            id="massage"
            cols="30"
            rows="8"
            placeholder="Message"
            ref={register({
              required: "Message is required",
            })}
          ></textarea>
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <div className="col-12">
          <button
            id="contactSubmit"
            type="submit"
            className="btn btn-dark btn-hover-dark"
            data-complete-text="Well Done!"
            disabled={!formState.isValid}
          >
            Send Message
          </button>
        </div>
      </form>
    </Fragment>
  )
}

export default ContactForm
