import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const FooterContainer = styled.div`
  background-color: #3e436a;
  height: 160px;
  display: flex;
  justify-content: center;
  padding: 0 10rem 0 10rem;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
`;

export const FooterSocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterSocial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FooterLogo = styled(LinkRouter)`
  justify-content: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  margin-bottom: 3rem;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  margin: 2rem 0;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FooterLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
`;

export const FooterButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterRequestButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FooterButtonText = styled.p`
  color: grey;
  font-size: 1rem;
  margin-top: 2rem;
`;
