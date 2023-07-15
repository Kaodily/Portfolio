import styled from "styled-components";

export const ModalWrapper = styled.section`
  .nav {
    width: 100%;
    height: 300px;
    background-color: white;
    position: absolute;
    top: 10px;
    padding-top: 50px;
    box-shadow: 1px 11px 72px -22px rgba(38, 38, 38, 0.65);
    z-index: 1000;
  }
  .close{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    
  }
  ul {
    list-style: none;
    text-align: center;
  }
  li {
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .overlay{
    position: fixed;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    background-color: rgb(0,0,0,0.7);
    z-index: 1000;
}

  @media (min-width: 768px) {
    display: none;
  }
`;
