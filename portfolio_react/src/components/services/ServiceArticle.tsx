import { BsCheck2 } from "react-icons/bs";
import { IServices } from "../../types";

const ServiceArticle = (props: IServices) => {
  return (
    <article className="service">
      <div className="service__head">
        <h3>{props.title}</h3>
        <ul className="service__list">
          <li>
            <BsCheck2 className="service__list-icon" />
            <p>{props.paragraf.first}</p>
          </li>
          <li>
            <BsCheck2 className="service__list-icon" />
            <p>{props.paragraf.second}</p>
          </li>
          <li>
            <BsCheck2 className="service__list-icon" />
            <p>{props.paragraf.third}</p>
          </li>
          {props.paragraf.forth ? (
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>{props.paragraf.forth}</p>
            </li>
          ) : null}
        </ul>
      </div>
    </article>
  );
};

export default ServiceArticle;
