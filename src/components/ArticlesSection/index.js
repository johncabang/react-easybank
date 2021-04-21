import {
  ArticlesContainer,
  ArticlesWrapper,
  ArticlesHeading,
  ArticleCardWrapper,
  ArticleCard,
  ArticleImage,
  ArticleAuthor,
  ArticleTitle,
  ArticleExerpt,
  ArticleText,
} from "./ArticlesElements";

const ArticlesSection = ({ data }) => {
  return (
    <ArticlesContainer>
      <ArticlesWrapper>
        <ArticlesHeading>Latest Articles</ArticlesHeading>
        <ArticleCardWrapper>
          {data.map((article) => {
            return (
              <ArticleCard key={article.id}>
                <ArticleImage src={article.image} alt={article.alt} />
                <ArticleText>
                  <ArticleAuthor>By {article.author}</ArticleAuthor>
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleExerpt>{article.exerpt}</ArticleExerpt>
                </ArticleText>
              </ArticleCard>
            );
          })}
        </ArticleCardWrapper>
      </ArticlesWrapper>
    </ArticlesContainer>
  );
};

export default ArticlesSection;
