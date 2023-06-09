import { servicesData } from "./servicesArticles";
import ServiceArticle from "./ServiceArticle";
import "./Services.scss";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div
        className="container services__container"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        {servicesData.map((item, i) => {
          return (
            <ServiceArticle
              title={item.title}
              paragraf={item.paragraf}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
