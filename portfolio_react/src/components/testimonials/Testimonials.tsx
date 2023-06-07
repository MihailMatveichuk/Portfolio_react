import { ITestimonial } from "../../types";
import { testimonialData } from "./testimonialData";
import TestimonialItem from "./TestimonialItem";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {testimonialData.map((item: ITestimonial, i) => {
          return (
            <TestimonialItem
              src={item.src}
              name={item.name}
              description={item.description}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
