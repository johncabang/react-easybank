import {
  HeroContainer,
  HeroImages,
  HeroBgImage,
  HeroMockupImage,
  HeroText,
  HeroTitle,
  HeroDescription,
  HeroBtn,
  HeroBtnLink,
} from "./HeroElements";
import bg from "./../../assets/bg-intro-desktop.svg";
import mockups from "./../../assets/image-mockups.png";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        <HeroTitle>Next generation digital banking</HeroTitle>
        <HeroDescription>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </HeroDescription>
        <HeroBtn>
          <HeroBtnLink to="/request">Request Invite</HeroBtnLink>
        </HeroBtn>
      </HeroText>
      <HeroImages>
        <HeroBgImage>
          <img src={bg} alt="bg" />
        </HeroBgImage>
        <HeroMockupImage>
          <img src={mockups} alt="mockups" />
        </HeroMockupImage>
      </HeroImages>
    </HeroContainer>
  );
};

export default Hero;
