import logo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import youtube from "../../assets/icon-youtube.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

import { RequestButton } from "../Button";
import {
  FooterContainer,
  FooterLogo,
  FooterWrapper,
  FooterSocialContainer,
  FooterSocial,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterButtonContainer,
  FooterButtonWrapper,
  FooterRequestButtonWrapper,
  FooterButtonText,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSocialContainer>
          <FooterLogo>
            <img src={logo} alt="logo" />
          </FooterLogo>
          <FooterSocial>
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="instagram" />
          </FooterSocial>
        </FooterSocialContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLink to="/">About Us</FooterLink>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Blog</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLink to="/">Career</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">Privacy Policy</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterButtonContainer>
          <FooterButtonWrapper>
            <FooterRequestButtonWrapper>
              <RequestButton />
            </FooterRequestButtonWrapper>
            <FooterButtonText>
              &copy; Easybank. All Rights Reserved.
            </FooterButtonText>
          </FooterButtonWrapper>
        </FooterButtonContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
