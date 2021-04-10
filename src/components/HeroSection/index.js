import {
  HeroContainer,
  HeroWrapper,
  HeroImages,
  HeroBgImage,
  HeroMockupImage,
  HeroText,
  HeroTitle,
  HeroDescription,
} from "./HeroElements";
import bg from "./../../assets/bg-intro-desktop.svg";
import mockups from "./../../assets/image-mockups.png";
import { RequestButton } from "../Button";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroText>
          <HeroTitle>Next generation digital banking</HeroTitle>
          <HeroDescription>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </HeroDescription>
          <RequestButton />
        </HeroText>
        <HeroImages>
          <HeroBgImage>
            <img src={bg} alt="bg" />
          </HeroBgImage>
          <HeroMockupImage>
            <img src={mockups} alt="mockups" />
          </HeroMockupImage>
        </HeroImages>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
