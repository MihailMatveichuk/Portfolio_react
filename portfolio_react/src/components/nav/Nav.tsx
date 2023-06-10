import { navData } from "./navData";
import { Link } from "react-scroll";
import "./Nav.scss";

import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("main");
  // const navSize =
  //   document.querySelector("nav")!.getBoundingClientRect().y + window.scrollY;
  // console.log(navSize);

  return (
    <nav>
      {navData.map((item, i) => {
        return (
          <Link
            title={item.title}
            Link
            to={item.title}
            spy={true}
            smooth={true}
            duration={100}
            className={active === item.title ? "active" : ""}
            onClick={() => setActive(item.title)}
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
