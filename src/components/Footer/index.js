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
  FooterLinkItem,
  FooterLink,
  FooterButtonContainer,
  FooterButtonWrapper,
  FooterRequestButtonWrapper,
  FooterButtonText,
  FooterSocialLink,
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
            <FooterSocialLink to="/">
              <img src={facebook} alt="facebook" />
            </FooterSocialLink>
            <FooterSocialLink to="/">
              <img src={youtube} alt="youtube" />
            </FooterSocialLink>
            <FooterSocialLink to="/">
              <img src={twitter} alt="twitter" />
            </FooterSocialLink>
            <FooterSocialLink to="/">
              <img src={pinterest} alt="pinterest" />
            </FooterSocialLink>
            <FooterSocialLink to="/">
              <img src={instagram} alt="instagram" />
            </FooterSocialLink>
          </FooterSocial>
        </FooterSocialContainer>

        <FooterLinksWrapper>
          <FooterLinkItem>
            <FooterLink to="/about">About Us</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink to="/blog">Blog</FooterLink>
          </FooterLinkItem>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItem>
            <FooterLink to="/career">Career</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink to="/support">Support</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink to="/policy">Privacy Policy</FooterLink>
          </FooterLinkItem>
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
