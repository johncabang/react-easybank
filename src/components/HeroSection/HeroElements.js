import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 800px;
`;

export const HeroImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -6rem;
  right: -23rem;
`;

export const HeroBgImage = styled.div`
  position: relative;
  top: -5.5rem;
`;

export const HeroMockupImage = styled.div`
  position: absolute;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  padding-left: 5rem;
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

export const HeroBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeroBtnLink = styled(LinkRouter)`
  border-radius: 25px;
  background: transparent
    linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%) 50%) no-repeat
    padding-box;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  padding: 10px 20px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: transparent
      linear-gradient(90deg, hsl(136, 65%, 51%) 20%, hsl(192, 70%, 51%) 70%) 0%
      0% no-repeat padding-box;
    color: black;
  }
`;
