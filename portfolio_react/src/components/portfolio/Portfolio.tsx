import { portfolioData } from "./portfolioData";
import "./Portfolio.scss";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map((item, i) => {
          return (
            <PortfolioItem
              src={item.src}
              title={item.title}
              GitHub={item.GitHub}
              LiveDemo={item.LiveDemo}
              delay={item.delay}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
