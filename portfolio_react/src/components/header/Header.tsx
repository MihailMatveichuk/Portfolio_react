import CTA from "./CTA";
import Photo from "../../assets/People.jpg";
import "./Header.scss";
import Social from "./Social";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Mikhail Matveichuk</h1>
        <h5 className="text-light">JavaScript Developer</h5>
        <CTA />
        <Social />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <div className="my-photo">
          <img src={Photo} alt="Photo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
