import { BsPatchCheckFill } from "react-icons/bs";
import { IArticle } from "../../types";

const Article = (data: IArticle) => {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{data.title}</h4>
        <small className="text-light">{data.description}</small>
      </div>
    </article>
  );
};

export default Article;
