import React from "react";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

import Hero from "./components/Hero/Hero";
import Roadmap from "./components/Roadmap/Roadmap";
import Benefit from "./components/Benefit/Benefit";
import Holder from "./components/Holder/Holder";
import HowToMint from "./components/HowToMint/HowToMint";
import FAQs from "./components/FAQs/FAQs";

import "fonts/DiaryOfAWimpyKidFont-Regular.ttf";

const Main = () => {
  return (
    <>
      <Header />
      <Hero />
      <Roadmap />
      <Benefit />
      <Holder />
      <HowToMint />
      <FAQs />
      <Footer />
    </>
  );
};

export default Main;
