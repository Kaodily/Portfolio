import styled from "styled-components";

export const ServiceWrapper = styled.section`
  margin-top: 100px;
  padding: 50px 25px;
  background-color: #adc0d319;
  h3 {
    margin-bottom: 10px;
    font-size: 25px;
  }
  p {
    padding-right: 20px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 300;
  }
  h4 {
    font-size: 18px;
  }
  .grid_container {
    margin-top: 30px;
    flex-wrap: wrap;
  }

  .grid_item {
    width: 100%;
    height: 70px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    /* box-shadow: -27px 3px 301px -3px rgba(145, 142, 142, 0.95); */
  }
  .grid_item:hover {
    background-color: black;
    color: white;
  }
  img {
    display: none;
  }

  @media (min-width: 768px) {
    padding: 50px 35px;
    margin-top: 40px;
    .service_container {
      display: flex;
      justify-content: space-between;
      gap: 50px;
    }
    .service_paragraph {
      padding: 0 150px 0 0;
    }

    .grid_container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    img {
      width: 100%;
      display: flex;
      height: 250px;
      object-fit: cover;
      margin-top: 20px;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 0;
    padding: 80px 100px;
    .flex_item {
      width: 250px;
    }
  }
`;
