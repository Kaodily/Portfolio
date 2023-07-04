import styled from "styled-components";

export const SkillsWrapper = styled.section`
  margin-top: 90px;
  padding: 50px 0;
  background-color: #adc0d319;

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
    padding: 50px;
    .skill_container {
      display: flex;
      justify-content: space-between;
      gap: 50px;
    }
    p {
      /* padding: 0 150px 0 0; */
    }
  }
`;
// export const SkillWrapper = styled.div`
//   /* .container {
//     width: 300px;
//     height: max-content;
//     padding: 30px 0;
//     background-color: black;
//     color: white;
//   }
//   ul {
//     list-style: none;
//     border-top: 2px solid gray;
//    */
//   }
// `;
