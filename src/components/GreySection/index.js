import {
  GreyWrapper,
  GreyContainer,
  GreyTitle,
  GreyDescription,
  GreyHeader,
  GreyBodyWrapper,
  GreyCard,
  GreyImage,
  GreyText,
  GreyCardTitle,
  GreyBody,
} from "./GreyElements";

const GreySection = ({ data }) => {
  return (
    <GreyContainer>
      <GreyWrapper>
        <GreyHeader>
          <GreyTitle>Why choose Easybank?</GreyTitle>
          <GreyDescription>
            We leverage Open Banking to turn your bank account into your
            financial hub. <br />
            Control your finances like never before.
          </GreyDescription>
        </GreyHeader>
        <GreyBodyWrapper>
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
        </GreyBodyWrapper>
      </GreyWrapper>
    </GreyContainer>
  );
};

export default GreySection;
