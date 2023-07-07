import React from "react";
import { Link } from "react-router-dom";
import { HeaderDesktopWrapper } from "../../../styles/header.styled";
// import { MdDarkMode, MdLightMode } from "react-icons/md";

const HeaderDesktop = () => {
  const links = [
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Works", link: "/works" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <HeaderDesktopWrapper>
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link to={link.link} key={index}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </HeaderDesktopWrapper>
  );
};

export default HeaderDesktop;
