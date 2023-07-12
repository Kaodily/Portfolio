import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SocialWrapper } from "../../styles/socials.styled";

const Socials = () => {
  return (
    <SocialWrapper>
      <div  className="icon_container">
        <FaGithub fontSize="20px" />
      </div>
      <div className="icon_container">
        <FaLinkedin fontSize="20px" />
      </div>
      <div className="icon_container">
        <FaTwitter fontSize="20px" />
      </div>
    </SocialWrapper>
  );
};

export default Socials;
