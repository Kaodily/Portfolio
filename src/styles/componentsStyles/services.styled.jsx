import styled from "styled-components";

export const ServiceWrapper = styled.section`
  margin-top: 100px;
  padding: 50px 25px;
  background-color: #adc0d319;
  h3 {
    font-family: "Space Grotesk", sans-serif;
    margin-bottom: 10px;
    font-size: 25px;
  }
  p {
    padding-right: 20px;
    color: #828fa3;
    line-height: 25px;
  }
  .flex_container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    flex-wrap: wrap;
  }

  .flex_item {
    width: 95%;
    height: 70px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    box-shadow: -27px 3px 301px -3px rgba(145, 142, 142, 0.95);
  }
  .flex_item:hover{
    background-color: black;
    
  }
  @media (min-width: 768px) {
    padding: 50px;
    margin-top: 40px;
    .service_container {
      display: flex;
      justify-content: space-between;
      gap: 50px;
    }
    .service_paragraph{
      padding: 0 150px 0 0;
    }
    .flex_item {
    width: 200px;
    
  }
    .flex_container {
      gap: 30px;
    }
  }
  @media (min-width: 1024px) {
    margin-top: 0;
    padding: 50px 60px 50px 100px;
    .flex_item {
    width: 250px;
    
  }
  }
`;
