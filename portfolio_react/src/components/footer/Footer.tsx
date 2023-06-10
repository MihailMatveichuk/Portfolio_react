import { MdFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { SlSocialVkontakte } from "react-icons/sl";
import { Link } from "react-scroll";
import { footerData } from "./footerData";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <Link to="main" className="footer__logo">
        Portfolio
      </Link>
      <ul className="permalinks">
        {footerData.map((link, i) => {
          return (
            <li>
              <Link to={link.link} key={i}>
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <MdFacebook />
        </a>
        <a href="https://instagram.com">
          <RiInstagramFill />
        </a>
        <a href="https://vk.com">
          <SlSocialVkontakte />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Designed in 2023</small>
      </div>
    </footer>
  );
};

export default Footer;
