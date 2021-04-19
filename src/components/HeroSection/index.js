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
import { RequestButton } from "../Button";

import bgdesktop from "./../../assets/bg-intro-desktop.svg";
import bgmobile from "./../../assets/bg-intro-mobile.svg";
import mockups from "./../../assets/image-mockups.png";

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
          <HeroBgImageDesktop src={bgdesktop} alt="desktop background" />
          <HeroBgImageMobile src={bgmobile} alt="mobile background" />
          <HeroMockupImage src={mockups} alt="mockup image" />
        </HeroImages>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
