import { BsPatchCheckFill } from "react-icons/bs";
import { IArticle } from "../../types";

const Article = (data: IArticle) => {
  console.log(data.title);
  return (
    <article className="experience__details">
      <BsPatchCheckFill />
      <h4>{data.title}</h4>
      <small className="text-light">{data.description}</small>
    </article>
  );
};

export default Article;
