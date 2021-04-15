import styled from "styled-components";

export const GreyContainer = styled.div`
  background-color: hsl(220, 16%, 96%);
  padding: 5rem 10rem 0 10rem;
  margin-top: -7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    flex-direction: column;
    text-align: center;
    padding: 2rem 2rem 0rem 2rem;
    margin-top: 0;
  }
`;

export const GreyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
`;

export const GreyHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;

export const GreyTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 100;
`;

export const GreyDescription = styled.p`
  color: hsl(233, 8%, 62%);
  padding: 2rem 0;
`;

export const GreyBodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const GreyCard = styled.div`
  border-radius: 10px;
  margin: 0 0.2rem 1rem 0;
  width: 260px;
`;

export const GreyImage = styled.img`
  border-radius: 10px 10px 0 0;
  background-position: center;
  background-size: cover;
`;

export const GreyText = styled.div`
  padding: 2rem 0;
`;

export const GreyCardTitle = styled.p`
  font-size: 1.5rem;
  padding-bottom: 1rem;
`;

export const GreyBody = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: hsl(233, 8%, 62%);
`;
