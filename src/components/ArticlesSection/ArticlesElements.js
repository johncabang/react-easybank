import styled from "styled-components";

export const ArticlesContainer = styled.div`
  padding: 5rem 10rem 5rem 10rem;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  background-color: #f2f2f2;
`;

export const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
`;

export const ArticlesHeading = styled.h1`
  color: #000;
  font-weight: 100;
  font-size: 2.5rem;
  width: 450px;
  padding-bottom: 2rem;
`;

export const ArticleCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ArticleCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 250px;
  margin-bottom: 1rem;
`;

export const ArticleImage = styled.img`
  border-radius: 10px 10px 0 0;
  height: 180px;
  width: 250px;
  background-position: center;
  background-size: cover;
`;

export const ArticleText = styled.div`
  padding: 2rem;
`;

export const ArticleAuthor = styled.h2`
  font-size: 0.5rem;
  color: #b2b2b2;
  padding-bottom: 1rem;
`;

export const ArticleTitle = styled.p`
  font-size: 1.1rem;
  padding-bottom: 1rem;
`;

export const ArticleExerpt = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  color: #b2b2b2;
`;
