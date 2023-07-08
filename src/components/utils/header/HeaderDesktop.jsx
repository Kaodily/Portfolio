import React from "react";

import { HeaderDesktopWrapper } from "../../../styles/header.styled";
import { NavHashLink as Link } from "react-router-hash-link";

const HeaderDesktop = () => {
  const links = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Works", link: "#works" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <HeaderDesktopWrapper>
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
                smooth
                to={link.link}
                key={index}>
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
