import Photo from "../../assets/People.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./About.scss";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div
        className="container about__container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="about__me">
          <div className="about__me-image">
            <img src={Photo} alt="ME" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Hello! My name is Mikhail. I have been programming for a year. As a
            Front-end developer I have made some small projects on React and
            JavaScript Native. I have acquired experience in managing a small
            team: I was Team Leader while fulfilling the final project of JS
            course at RS School. Generally I use TypeScript when I make my
            projects. I am always ready to work hard gradually improving my hard
            and soft skills.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
