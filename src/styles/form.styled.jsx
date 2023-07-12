import styled from "styled-components";

export const FormWrapper = styled.div`
  .flex_input {
    margin: 10px 0;
    display: flex;
    gap: 8px;
  }
  .flex_input input {
    width: 100%;
    height: 50px;
    padding: 15px;
    border: none;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.04);
  }
  textarea {
    width: 100%;
    height: 150px;
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.04);
  }
  button {
    width: 100%;
    padding: 20px;
    background-color: black;
    border: none;
    margin-top: 15px;
    color: white;
    border-radius: 8px;
    font-size: 17px;
  }
  @media (min-width: 768px) {
    .flex_input {
      display: flex;
      gap: 10px;
    }
  }
`;
