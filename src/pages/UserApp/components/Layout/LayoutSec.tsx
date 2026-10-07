import {
  LayoutWrapper,
  Header,
  Main,
  // Footer,
  Logo,
  LogoImg,
  NavigationContainer,
  HeaderLink

} from "./styles";
import MbrandLogo from "assets/MbrandLogo.png"
import CreateEmployees from "../CreateEmp/CreateEmployees";
import { type LayoutProps } from "./types";

function LayoutSec({ children }: LayoutProps){
  return (
    <LayoutWrapper>
      <Header > 
        <Logo>
        <LogoImg src={MbrandLogo} />
        </Logo>
        <NavigationContainer>
          <HeaderLink to="/CreateEmployees">Create Employee </HeaderLink>
           <HeaderLink to="Employee">Employees </HeaderLink>     
        </NavigationContainer>

      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  );
}

export default LayoutSec;

