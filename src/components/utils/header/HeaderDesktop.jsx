import React from "react";

import { HeaderDesktopWrapper } from "../../../styles/header.styled";
import { NavHashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const HeaderDesktop = () => {
  const links = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Works", link: "#works" },
    { name: "Contact", link: "#contact" },
  ];

  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  return (
    <HeaderDesktopWrapper>
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                smooth
                to={`${link.link}`}
                style={
                  isActive(`${link.link}`)
                    ? {
                        color: "red",
                      }
                    : {}
                }
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
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
