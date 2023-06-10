import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiBookBookmark } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";

export const navData = [
  { title: "main", href: "#", img: AiOutlineHome },
  { title: "about", href: "#about", img: AiOutlineUser },
  { title: "experience", href: "#experience", img: BiBookBookmark },
  { title: "services", href: "#services", img: RiServiceLine },
  { title: "testimonials", href: "#testimonials", img: BsPeople },
  { title: "contact", href: "#contact", img: BiMessageDetail },
];
