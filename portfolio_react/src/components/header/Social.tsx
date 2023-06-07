import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

const Social = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/mikhailmatveichuk" target="__blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/MihailMatveichuk" target="__blank">
        <BsGithub />
      </a>
      <a href="https://t.me/fletcher1991" target="__blank">
        <BsTelegram />
      </a>
    </div>
  );
};

export default Social;
