import styled from "styled-components";

export const ContactWrapper = styled.section`
  margin-top: 50px;
  padding: 50px 25px;
  background-color: #adc0d319;
  display: grid;
  justify-content: center;

  h3 {
    font-family: "Space Grotesk", sans-serif;
    margin-bottom: 8px;
    font-size: 25px;
  }
  p {
    padding:5px 0;
    color: #828fa3;
    line-height: 25px;
  }
  img {
    width: 100%;
    border-radius: 10px;
    margin: 0  auto 30px auto;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  @media (min-width: 820px) {
    padding: 50px 60px;
    /* gap: 30px; */
  }
  @media (min-width: 1028px) {
    padding: 50px 110px;
    gap: 30px;
  }
`;
