import { servicesData } from "./servicesArticles";
import ServiceArticle from "./ServiceArticle";
import { IServices } from "../../types";
import "./Services.scss";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {servicesData.map((item: IServices, i) => {
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
