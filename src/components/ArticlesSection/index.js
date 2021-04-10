import {
  ArticlesContainer,
  ArticlesHeading,
  ArticlesWrapper,
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
      <ArticlesHeading>Latest Articles</ArticlesHeading>
      <ArticlesWrapper>
        {data.map((article) => {
          return (
            <ArticleCard key={article.id}>
              <ArticleImage src={article.image} />
              <ArticleText>
                <ArticleAuthor>By {article.author}</ArticleAuthor>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleExerpt>{article.exerpt}</ArticleExerpt>
              </ArticleText>
            </ArticleCard>
          );
        })}
      </ArticlesWrapper>
    </ArticlesContainer>
  );
};

export default ArticlesSection;
