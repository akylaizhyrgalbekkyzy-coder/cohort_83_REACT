import { useNavigate } from "react-router-dom";
import { ROUTES,NAVIGATION_MENU_ROUTES } from "constants/routes";
// import from {uuid}
import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Logo,
  LogoImg,
  HeaderLink,
  NavigationContainer,
  FooterLogo,
  FooterLink,
  FooterNavigation,
  getActiveStyles,
} from "./styles";
import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(ROUTES.HOME);
  };


  const menuKeys = Object.keys(NAVIGATION_MENU_ROUTES);
  const menuValues = Object.values(NAVIGATION_MENU_ROUTES);

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomePage}>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </Logo>
        <NavigationContainer>
             {menuKeys.map((key, value) => (
            <HeaderLink key={key} style={getActiveStyles} to={menuValues[value]}>
              {key}
              </HeaderLink>
          ))}
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </FooterLogo>
        <FooterNavigation>
            {menuKeys.map((key, value) => (
            <FooterLink key={key} to={menuValues[value]}>
              {key}
            </FooterLink>
          ))}
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;

//эти версии без использования ROUTes
//1){/* {/* <HeaderLink style={getActiveStyles} to="/">
          //   Home
          // </HeaderLink>
          {/* <HeaderLink >Clients</HeaderLink> */}
          {/* <HeaderLink style={getActiveStyles} to="/contactUs">
            Contact Us
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to="/about">
            About
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to="/Clients">
            Clients
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to="/login">
            Login
          // </HeaderLink> */}  

//2)
        {/* <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/clients">Clients</FooterLink>
          <FooterLink to="/contactUs">Contact Us</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/login">Login</FooterLink> */}