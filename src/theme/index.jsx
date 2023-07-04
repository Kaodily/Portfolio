import { createGlobalStyle } from "styled-components";

const Themes = {
  light: {
    color: "#00000",
    bg: "#ffff",
    position: "4px",
    nav: "white",
    mode: "#E4EBFA",
  },
  dark: {
    color: "#ffff",
    bg: "#20212c",
    position: "24px",
    nav: " var(--nav)",
    mode: "var(--background)",
  },
};
const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif;
      background-color: ${({ theme }) => theme.bg};
      color:${({ theme }) => theme.color};
      transition:'2s linear';
  }
  .circle_theme {
      position: absolute;
      top:3px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: white;
      transition: 1s;
      left: ${({ theme }) => theme.position}
    } 
    .mode{
  background-color: ${({ theme }) => theme.mode} ;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 6px;
  }
    
    `;
