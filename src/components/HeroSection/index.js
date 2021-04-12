import {
  HeroContainer,
  HeroWrapper,
  HeroImages,
  HeroBgImageDesktop,
  HeroBgImageMobile,
  HeroMockupImage,
  HeroText,
  HeroTitle,
  HeroDescription,
  HeroButton,
} from "./HeroElements";
import bgdesktop from "./../../assets/bg-intro-desktop.svg";
import bgmobile from "./../../assets/bg-intro-mobile.svg";

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
          <HeroButton>
            <RequestButton />
          </HeroButton>
        </HeroText>
        <HeroImages>
          <HeroBgImageDesktop src={bgdesktop} />
          <HeroBgImageMobile src={bgmobile} />
          <HeroMockupImage src={mockups} />
        </HeroImages>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
