import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ButtonStyled, ButtonWrapper } from "./button.styled";

const Button = ({content}) => {
  return (
    <ButtonWrapper>
      <ButtonStyled>
      {content}
        <FaLongArrowAltRight />
      </ButtonStyled>
    </ButtonWrapper>
  );
};

export default Button;
