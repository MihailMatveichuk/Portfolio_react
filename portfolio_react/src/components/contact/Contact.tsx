import { contactData } from "./contactData";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_nm656fk",
        "template_0gk3juc",
        form.current,
        "i4NKTUGzoa5e5fuCk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = () => {
    sendEmail();
    reset;
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contactData.map((item, i) => {
            return (
              <article className="contact__option" key={i}>
                <item.icon className="contact__option-icon" />
                <h4>{item.title}</h4>
                <h5>{item.variant}</h5>
                <a href={item.link} target="__blank">
                  Send a message
                </a>
              </article>
            );
          })}
        </div>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", {
              required: "This input is required.",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "This input is string only.",
              },
              minLength: {
                value: 4,
                message: "This input must exceed more than 3 characters",
              },
            })}
            placeholder="Your fullname"
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                : null;
            }}
          />
          <input
            {...register("email", {
              required: "This input is required.",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "This unavailable email.",
              },
            })}
            placeholder="Your email"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                : null;
            }}
          />
          <textarea
            {...register("message", {})}
            cols={30}
            rows={10}
            placeholder="Your message"
          />
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
