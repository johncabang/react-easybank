import logo from "../../assets/logo.svg";
import { FooterContainer, FooterLogo } from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>
        <img src={logo} alt="logo" />
      </FooterLogo>
    </FooterContainer>
  );
};

export default Footer;
