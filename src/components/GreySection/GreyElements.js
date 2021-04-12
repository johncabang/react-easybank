import styled from "styled-components";

export const GreyContainer = styled.div`
  background-color: #fafafa;
  padding: 5rem 10rem 0 10rem;
  margin-top: -7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  @media screen and (max-width: 820px) {
    transition: 0.8s all ease;
    padding: 2rem 2rem 0rem 2rem;
    text-align: center;
    flex-direction: column;
    margin-top: 0;s
  }
`;

export const GreyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
`;

export const GreyHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;

export const GreyTitle = styled.h1`
  color: #000;
  font-weight: 100;
  font-size: 2.5rem;
`;

export const GreyDescription = styled.p`
  color: #b2b2b2;
  padding: 2rem 0;
`;

export const GreyBodyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 820px) {
    display: flex;
    justify-content: center;
  }
`;

export const GreyCard = styled.div`
  border-radius: 10px;
  width: 260px;
  margin: 0 0.2rem 1rem 0;
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
  color: #b2b2b2;
`;
