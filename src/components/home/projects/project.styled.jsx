import styled from "styled-components";

export const ProjectsWrapper = styled.section`
  margin-top: 40px;
  /* padding: 30px 200px; */
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
    grid-template-columns: repeat(2, 300px);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 300px);
  }
`;
export const ProjectWrapper = styled.section`
  width: 90%;
  padding: 20px;
  margin: 30px auto;
  background-color: #adc0d319;

  img {
    width: 100%;
    border-radius: 3px;
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    width: 300px;
  }
`;
