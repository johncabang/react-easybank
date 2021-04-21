import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: hsl(233, 26%, 24%);
  height: 160px;
  display: flex;
  justify-content: center;
  padding: 0 10rem 0 10rem;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 2rem 0rem 2rem 0rem;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
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
  width: 100%;

  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

export const FooterSocialLink = styled(LinkRouter)`
  cursor: pointer;

  // Todos - hover state colour (SVG)

  &:hover {
    fill: hsl(136, 65%, 51%);
  }
`;

// Todos - Change Logo colour to white (SVG)

export const FooterLogo = styled(LinkRouter)`
  cursor: pointer;
  margin-bottom: 3rem;
`;

export const FooterLinksWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  margin: 2rem 0;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const FooterLinkItem = styled.li`
  height: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 1.2rem 0 0 0;
  }
`;

export const FooterLink = styled(LinkRouter)`
  color: hsl(220, 16%, 96%);
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: hsl(136, 65%, 51%);
  }
`;

export const FooterButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 1.2rem;
  }
`;

export const FooterButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FooterRequestButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const FooterButtonText = styled.p`
  color: hsl(233, 8%, 62%);
  font-size: 1rem;
  margin-top: 2rem;
`;
