import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <Navlogo to="/">
          <img src={logo} alt="logo" />
        </Navlogo>
        <MobileIcon>
          <img src={hamburger} alt="hamburger" />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/home">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contact">Contact</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/blog">Blog</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/careers">Careers</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/request">Request Invite</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
