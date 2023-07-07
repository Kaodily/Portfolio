import React from "react";
import { ButtonStyled, ButtonWrapper } from "../../styles/button.styled";
import { FaLongArrowAltRight } from "react-icons/fa";


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
