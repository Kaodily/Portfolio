import styled from "styled-components";

export const ContactWrapper = styled.section`
  margin-top: 100px;
  padding: 50px 30px;
  background-color: #adc0d319;
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
  img {
    width: 100%;
    border-radius: 10px;
    margin: 0  auto 30px auto;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 50px 80px;
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
export const FormWrapper = styled.div`
    .flex_input {
      margin: 10px 0;
    }
  .flex_input input {
    width: 100%;
    height: 50px;
    padding: 15px;
    border: none;
    margin-bottom: 20px;
    border-radius: 3px;
  }
  textarea {
    width: 100%;
    height: 150px;
    padding: 10px;
    border: none;
    border-radius: 3px;
  }
  @media (min-width: 768px) {
    .flex_input {
      display: flex;
      gap: 10px;
      margin: 20px 0;
    }
  }
  .flex_input input {
    /* width: 150px; */
    padding: 10px;
    border: none;
    border-radius: 3px;
  }
  textarea {
    height: 150px;
    padding: 10px;
    border: none;
    border-radius: 3px;
  }
`;
