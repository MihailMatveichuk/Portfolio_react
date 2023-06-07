import { ITestimonial } from "../../types";

const TestimonialItem = (props: ITestimonial) => {
  return (
    <article className="testimonial">
      <div className="client__avatar">
        <img src={props.src} alt={props.name} />
      </div>
      <h5 className="client__name">{props.name}</h5>
      <small className="client__review">{props.description}</small>
    </article>
  );
};

export default TestimonialItem;
