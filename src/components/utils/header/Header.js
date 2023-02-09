import React from 'react';
import classes from "./Header.module.css";
import {GiHamburgerMenu} from "react-icons/gi"

const Header = () => {
  return (
    <header className={classes.header}>
       <h2>CM</h2>
       <GiHamburgerMenu fontSize="1.5em" />
    </header>
  )
}

export default Header
