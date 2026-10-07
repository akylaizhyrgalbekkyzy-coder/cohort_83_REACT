import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  background-color: rgba(0, 10, 66, 0.9);
  padding: 20px 40px;
  color: white;
`;
export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 50%;
  width: 280px;
  height: 100px;
  background-color:white;
  

`
export const LogoImg = styled.img`
  z-index:1;
  width: auto;
  /* height: 100%; */
 
  `
  export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
`;
export const HeaderLink = styled(NavLink)`
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
  color: white;
`;


export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 40px;
`;

// export const Footer = styled.footer`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   height: 150px;
//   border-top: 1px solid black;
//   background-color: rgba(0, 10, 66, 0.9);
//   padding: 20px 40px;
//   color: white;
// `;

