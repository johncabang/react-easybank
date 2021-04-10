import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  padding: 0 10rem 0 10rem;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1400px;
`;

export const HeroImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  top: -9rem;
  right: -40rem;
`;

export const HeroBgImage = styled.div`
  display: flex;
  position: absolute;
`;

export const HeroMockupImage = styled.div`
  display: flex;
  position: absolute;
  top: -15rem;
  right: -15rem;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
`;

export const HeroTitle = styled.h1`
  color: #000;
  font-weight: 100;
  font-size: 3rem;
  width: 450px;
`;

export const HeroDescription = styled.p`
  color: #b2b2b2;
  padding: 2rem 0;
  width: 490px;
`;
