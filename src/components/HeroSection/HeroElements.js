import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  padding: 0 10rem 0 10rem;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    padding: 0;
    text-align: center;
    height: 100%;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1440px;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    flex-direction: column-reverse;
  }
`;

export const HeroImages = styled.div`
  transition: 0.8s all ease;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -3rem;
  right: -9rem;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    top: -11.8rem;
    right: 0;
  }

  @media screen and (max-width: 375px) {
    top: -8.2rem;
  }
`;

export const HeroBgImageDesktop = styled.img`
  transition: 0.8s all ease;
  position: absolute;
  top: -9rem;
  right: -20rem;
  z-index: -1;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    display: none;
  }
`;

export const HeroBgImageMobile = styled.img`
  transition: 0.8s all ease;
  display: none;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    display: flex;
    justify-content: center;
    height: auto;
    width: 100%;
    position: absolute;
    margin-bottom: 0;
    z-index: -999;
    top: 9rem;
  }

  @media screen and (max-width: 375px) {
    top: 5rem;
  }
`;

export const HeroMockupImage = styled.img`
  height: 100%;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    width: auto;
    height: 650px;
  }

  @media screen and (max-width: 375px) {
    height: 450px;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
  position: relative;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    height: 100%;
    top: -8rem;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 100;
  font-size: 3rem;
  width: 450px;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    font-size: 2.4rem;
  }
`;

export const HeroDescription = styled.p`
  color: hsl(233, 8%, 62%);
  padding: 2rem 0;
  width: 490px;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    width: 100%;
    padding: 2rem 2rem;
  }
`;

export const HeroButton = styled.div`
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    display: flex;
    justify-content: center;
  }
`;
