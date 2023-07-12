import styled from "styled-components";

export const AboutWrapper = styled.section`
  h1 {
    letter-spacing: 1px;
    line-height: 35px;
    padding: 20px 0;
  }
  .hero_about {
    padding: 50px 25px;
  }

  .about {
    color: #828fa3;
    line-height: 30px;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 30px;
  }
  img {
    width: 100%;
    border-radius: 10px;
    transition: 0.2s;
  }

  img:hover {
    transform: scale(1.1) rotate(-15deg);
  }
  .hero_img {
    margin: 20px;
  }
  .square_background {
    width: 20rem;
    height: 20rem;
    background-color: #adc0d319;
    padding: 20px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 60px 25px;

    .hero_img {
      position: absolute;
      top: 200px;
      right: 40px;
    }
    img {
      width: 300px;
    }
    .hero_about {
      padding: 10px;
    }
    .square_background {
      width: 23rem;
      height: 23rem;
      margin: 50px auto;
    }
  }
  @media (min-width: 1024px) {
    padding: 80px;
    .square_background {
      width: 27rem;
      height: 25rem;
      background-color: #a6897611;
      margin: 20px auto;
    }
    .hero_img {
      position: absolute;
      top: 200px;
      right: 80px;
    }
    .hero_about {
      padding: 50px 20px;
    }
  }
`;
