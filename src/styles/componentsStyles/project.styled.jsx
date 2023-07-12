import styled from "styled-components";

export const ProjectsWrapper = styled.section`
  padding: 50px 25px;
  .grid_container {
    display: grid;
    justify-content: center;
  }

  h3 {
    font-family: "Space Grotesk", sans-serif;
    margin-bottom: 10px;
    font-size: 25px;
  }
  p {
    line-height: 25px;
    font-weight: 300;
    font-size: 14px;
  }
  @media (min-width: 768px) {
    .grid_container {
      grid-template-columns: repeat(2, 340px);
      gap: 20px;
    }
    .heading {
      padding: 20px 0 0 25px;
    }
  }
  @media (min-width: 1024px) {
    .grid_container {
      grid-template-columns: repeat(3, 280px);
      gap: 10px;
    }
  }
  @media (min-width: 1280px) {
    .grid_container {
      grid-template-columns: repeat(3, 300px);
      gap: 40px;
    }
  }
`;
export const ProjectWrapper = styled.article`
  width: 100%;
  padding: 20px;
  margin: 30px 0;
  background-color: #adc0d319;
  border-radius: 8px;
  h4 {
    font-size: 18px;
  }
  p {
    line-height: 25px;
    padding: 10px 0;
  }
  img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    width: 340px;
  }
  @media (min-width: 1024px) {
    width: 260px;
  }
  @media (min-width: 1280px) {
    width: 300px;
  }
`;
