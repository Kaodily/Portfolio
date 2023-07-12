import styled from "styled-components";

export const ContactWrapper = styled.section`
  margin-top: 20px;
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
    padding: 5px 0;
    line-height: 25px;
    font-weight: 300;
    font-size: 14px;
  }
  img {
    width: 100%;
    border-radius: 10px;
    height: 500px;
    margin: 0 auto 30px auto;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 50px 35px;
  }
  @media (min-width: 1024px) {
    padding: 80px 100px;
    gap: 0;
    img {
      width: 80%;
      object-fit: cover;
    }
  }
`;
