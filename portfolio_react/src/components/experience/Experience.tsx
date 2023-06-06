import { articlesToFront, articlesToBack } from "./articles";
import { IArticle } from "../../types";
import Article from "./Article";
import "./Experience.scss";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {articlesToFront.map((item: IArticle, i) => {
              return (
                <Article
                  title={item.title}
                  description={item.description}
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {articlesToBack.map((item: IArticle, i) => {
              return (
                <Article
                  title={item.title}
                  description={item.description}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
