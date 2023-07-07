import styled from "styled-components";

export const ProjectsWrapper = styled.section`
  margin-top: 40px;
  display: grid;
  justify-content: center;
  h3 {
    font-family: "Space Grotesk", sans-serif;
    margin-bottom: 10px;
  }
  p {
    padding-right: 20px;
    color: #828fa3;
    line-height: 25px;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 340px);
    gap: 30px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 280px);
    gap: 10px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 300px);
    gap: 40px;
  }
`;
export const ProjectWrapper = styled.section`
  width: 75%;
  padding: 20px;
  margin: 30px auto; 
  background-color: #adc0d319;
  img {
    width: 100%;
    border-radius: 3px;
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
