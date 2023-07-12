import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { ButtonWrapper } from "../../styles/button.styled";
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = ({ content, link }) => {
  return (
    <ButtonWrapper>
      <Link className="link" to={`${link}`} smooth>{content}</Link>
      <FaLongArrowAltRight />
    </ButtonWrapper>
  );
};

export default Button;
