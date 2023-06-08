import { IContactData } from "../../types";
import { contactData } from "./contactData";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contactData.map((item: IContactData, i) => {
            return (
              <article className="contact__option" key={i}>
                <item.icon />
                <h4>{item.title}</h4>
                <h5>{item.variant}</h5>
                <a href={item.link}>Send a message</a>
              </article>
            );
          })}
        </div>
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
