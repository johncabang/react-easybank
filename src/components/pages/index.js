import ArticlesSection from "../ArticlesSection";
import Footer from "../Footer/";
import GreySection from "../GreySection";
import Hero from "../HeroSection";
import Navbar from "../Navbar";
import { articlesData, greyData } from "./../../data";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GreySection data={greyData} />
      <ArticlesSection data={articlesData} />
      <Footer />
    </>
  );
};

export default Home;
