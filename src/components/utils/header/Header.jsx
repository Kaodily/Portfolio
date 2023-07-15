import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
// import { HeaderWrapper } from "./header.styled";
import HeaderDesktop from "./HeaderDesktop";
import { HeaderWrapper } from "../../../styles/header.styled";
import { Store } from "../../../store/context/AppContext";

const Header = () => {
  const { openModal } = Store();
  return (
    <HeaderWrapper>
      <nav className="nav_bar">
        <p className="logo">Kaodili</p>
        <div className="hamburger" onClick={openModal}>
          <RxHamburgerMenu fontSize="1.8em" />
        </div>
        <HeaderDesktop />
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
