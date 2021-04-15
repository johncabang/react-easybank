import React, { useState } from "react";
import ArticlesSection from "../ArticlesSection";
import Footer from "../Footer/";
import GreySection from "../GreySection";
import Hero from "../HeroSection";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { articlesData, greyData } from "./../../data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <GreySection data={greyData} />
      <ArticlesSection data={articlesData} />
      <Footer />
    </>
  );
};

export default Home;
