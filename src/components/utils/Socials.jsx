import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SocialWrapper } from "../../styles/socials.styled";

const Socials = () => {
  return (
    <SocialWrapper>
      <FaGithub fontSize='20px' />
      <FaLinkedin fontSize='20px' />
      <FaTwitter fontSize='20px' />
    </SocialWrapper>
  );
};

export default Socials;
