import { IPortfolio } from "../../types";

const PortfolioItem = (props: IPortfolio) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={props.src} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
      <div className="portfolio__item-cta">
        <a href={props.GitHub} className="btn" target="_blank">
          GitHub
        </a>
        <a href={props.LiveDemo} className="btn btn-primary" target="_blank">
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default PortfolioItem;
