import { navData } from "./navData";
import { Link } from "react-scroll";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      {navData.map((item, i) => {
        return (
          <Link
            title={item.title}
            activeClass="active"
            to={item.title}
            offset={-100}
            spy={true}
            smooth={true}
            duration={100}
            key={i}
          >
            <item.img />
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
