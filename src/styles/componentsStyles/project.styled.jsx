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
    padding: 50px 35px;
    .grid_container {
      grid-template-columns: repeat(2, 340px);
      gap: 30px;
      margin-top: 40px;
    }
    p {
      padding: 0 300px 0 0;
    }
  }
  @media (min-width: 820px) {
    .grid_container {
      grid-template-columns: repeat(2, 360px);
      gap: 30px;
    }
  }
  @media (min-width: 1024px) {
    padding: 80px 100px;
    .grid_container {
      grid-template-columns: repeat(3, 280px);
      gap: 15px;
    }
  }
  @media (min-width: 1280px) {
    /* padding: 80px 100px; */
    .grid_container {
      grid-template-columns: repeat(3, 340px);
      gap: 35px;
    }
  }
`;
export const ProjectWrapper = styled.article`
  width: 100%;
  padding: 20px;
  margin: 20px 0;
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
  a {
    width: 150px;
    height: 50px;
    background-color: yellow;
    padding: 10px;
    border: none;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    gap: 5px;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    width: 340px;
    margin: 0;
  }
  @media (min-width: 820px) {
    width: 360px;
  }
  @media (min-width: 1024px) {
    width: 280px;
  }
  @media (min-width: 1280px) {
    width: 340px;
  }
`;
