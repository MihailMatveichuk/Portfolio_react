import CV from "../../assets/MyCV.pdf";
import { Link } from "react-scroll";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <Link to="contact" className="btn btn-primary">
        Let's talk
      </Link>
    </div>
  );
};

export default CTA;
