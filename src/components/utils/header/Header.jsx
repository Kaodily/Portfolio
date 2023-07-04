import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HeaderWrapper } from "./header.styled";
import HeaderDesktop from "./HeaderDesktop";

const Header = () => {
  return (
    <HeaderWrapper>
     <nav className="nav_bar">
       <h3 className="logo">Kaodili</h3>
      <div className="hamburger">
        <RxHamburgerMenu fontSize="1.8em" />
      </div>
      <HeaderDesktop />
     </nav>
    </HeaderWrapper>
  );
};

export default Header;
