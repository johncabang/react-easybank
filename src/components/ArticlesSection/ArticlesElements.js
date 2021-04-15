import styled from "styled-components";

export const ArticlesContainer = styled.div`
  background-color: hsl(0, 0%, 98%);
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  padding: 5rem 10rem 5rem 10rem;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    padding: 5rem 2rem 5rem 2rem;
  }
`;

export const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
`;

export const ArticlesHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 100;
  padding-bottom: 2rem;
  width: 450px;

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const ArticleCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ArticleCard = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-radius: 10px;
  margin-bottom: 1rem;
  width: 250px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ArticleImage = styled.img`
  background-position: center;
  background-size: cover;
  border-radius: 10px 10px 0 0;
  height: 180px;
  width: 250px;

  @media screen and (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`;

export const ArticleText = styled.div`
  padding: 2rem;
`;

export const ArticleAuthor = styled.h2`
  color: hsl(233, 8%, 62%);
  font-size: 0.5rem;
  padding-bottom: 1rem;
`;

export const ArticleTitle = styled.p`
  font-size: 1.1rem;
  padding-bottom: 1rem;

  &:hover {
    color: hsl(136, 65%, 51%);
  }
`;

export const ArticleExerpt = styled.p`
  color: hsl(233, 8%, 62%);
  font-size: 0.8rem;
  font-weight: 700;
`;
