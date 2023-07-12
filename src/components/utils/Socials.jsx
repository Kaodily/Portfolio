import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SocialWrapper } from "../../styles/socials.styled";

const Socials = () => {
  return (
    <SocialWrapper>
      <a
        href="https://github.com/Kaodily"
        target="_blank"
        rel="noreferrer"
        className="icon_container">
        <FaGithub fontSize="20px" />
      </a>
      <a href="https://www.linkedin.com/in/chika-isizoh" className="icon_container" target="_blank" rel="noreferrer">
        <FaLinkedin fontSize="20px" />
      </a>
      <a href="https://twitter.com/ka_odily" className="icon_container" target="_blank" rel="noreferrer">
        <FaTwitter fontSize="20px" />
      </a>
    </SocialWrapper>
  );
};

export default Socials;
