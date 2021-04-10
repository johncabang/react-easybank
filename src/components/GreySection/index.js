import {
  GreyContainer,
  GreyTitle,
  GreyDescription,
  GreyHeader,
  GreyWrapper,
  GreyCard,
  GreyImage,
  GreyText,
  GreyCardTitle,
  GreyBody,
} from "./GreyElements";

const GreySection = ({ data }) => {
  return (
    <GreyContainer>
      <GreyHeader>
        <GreyTitle>Why choose Easybank?</GreyTitle>
        <GreyDescription>
          We leverage Open Banking to turn your bank account into your financial
          hub. <br />
          Control your finances like never before.
        </GreyDescription>
      </GreyHeader>
      <GreyWrapper>
        {data.map((article) => {
          return (
            <GreyCard key={article.id}>
              <GreyImage src={article.image} />
              <GreyText>
                <GreyCardTitle>{article.title}</GreyCardTitle>
                <GreyBody>{article.body}</GreyBody>
              </GreyText>
            </GreyCard>
          );
        })}
      </GreyWrapper>
    </GreyContainer>
  );
};

export default GreySection;
