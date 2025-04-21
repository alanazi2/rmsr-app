import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import "./i18n";

export default function App() {
  return (
    <div className="font-saudi">
      <Header />
      <Hero />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}