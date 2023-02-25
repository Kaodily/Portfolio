import React from 'react';
import classes from "./Footer.module.css"
import {AiFillGithub,AiFillTwitterCircle,AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className={classes.footer}>
    <h2>CM</h2>
    <ul className={classes.list}>
        <li>Home</li>
        <li>Work</li>
        <li>Contact me</li>
    </ul>
<ul className={classes.social}>
    <li><AiFillGithub  fontSize="1.3rem" /></li>
    <li><AiFillTwitterCircle  fontSize="1.3rem"/></li>
    <li><AiFillLinkedin fontSize="1.3rem" /></li>
</ul>
    </footer>
  )
}

export default Footer