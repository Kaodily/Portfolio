import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: white;
  position: sticky;
  top: 0;
  padding: 0 25px;
  z-index: 1;
  box-shadow: 1px 11px 72px -22px rgba(38, 38, 38, 0.65);

  .nav_bar {
    display: flex;
    height: 70px;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 20px;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    padding: 0 35px;
    .hamburger {
      display: none;
    }
  }
`;

export const HeaderDesktopWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    ul {
      display: flex;
      list-style: none;
      margin-top: 5px;
    }
    li {
      margin-left: 20px;
    }
    a {
      text-decoration: none;
      color: black;
      font-weight: 300;
    }
  }
`;
