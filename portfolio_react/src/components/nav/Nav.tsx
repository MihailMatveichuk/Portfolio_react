import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiBookBookmark } from "react-icons/bi";
import "./Nav.scss";

import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("#");
  const navSize =
    document.querySelector("nav")!.getBoundingClientRect().y + window.scrollY;
  console.log(navSize);

  return (
    <nav>
      <a
        title="main"
        href="#"
        className={active === "#" ? "active" : ""}
        onClick={() => setActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        title="about"
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        title="experience"
        href="#experience"
        className={active === "#experience" ? "active" : ""}
        onClick={() => setActive("#experience")}
      >
        <BiBookBookmark />
      </a>
      <a
        title="services"
        href="#services"
        className={active === "#services" ? "active" : ""}
        onClick={() => setActive("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        title="contact"
        href="#contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
