import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  padding: 0 10rem 0 10rem;

  @media screen and (max-width: 960px) {
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
  max-width: 1400px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    flex-direction: column-reverse;
  }
`;

export const HeroImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -3rem;
  right: -9rem;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    overflow: hidden;
    top: -7.8rem;
    right: 0;
  }
`;

export const HeroBgImageDesktop = styled.img`
  position: absolute;
  z-index: -999;
  top: -9rem;
  right: -20rem;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const HeroBgImageMobile = styled.img`
  display: none;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    display: flex;
    justify-content: center;
    height: auto;
    width: 100%;
    position: absolute;
    top: -2rem;
    z-index: -1;
  }
`;

export const HeroMockupImage = styled.img`
  height: 100%;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    height: 450px;
    width: auto;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  position: relative;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    position: static;
    height: 100%;
    padding-bottom: 5rem;
  }
`;

export const HeroButton = styled.div`
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    display: flex;
    justify-content: center;
  }
`;

export const HeroTitle = styled.h1`
  color: #000;
  font-weight: 100;
  font-size: 3rem;
  width: 450px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    width: 100%;
    font-size: 2.4rem;
  }
`;

export const HeroDescription = styled.p`
  color: #b2b2b2;
  padding: 2rem 0;
  width: 490px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    width: 100%;
    font-size: 1.2rem;
    padding: 2rem 2rem;
  }
`;
