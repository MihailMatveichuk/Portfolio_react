import { testimonialData } from "./testimonialData";
import "./Testimonials.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css"; // core Swiper
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-delay="300"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialData.map((item, i) => {
          return (
            <SwiperSlide key={i} className="testimonial">
              <div className="client__avatar">
                <img src={item.src} alt={item.name} />
              </div>
              <h5 className="client__name">{item.name}</h5>
              <small className="client__review">{item.description}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
