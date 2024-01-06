import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../styles/GlobalStyles.js";
import { light } from "../styles/Themes.js";
import { ThemeProvider } from "styled-components";
import Navigation from "../components/Navigation.js";
import About from "../components/About.js";
import Home from "../components/Home.js";
import Roadmap from "../components/Roadmap.js";
import Team from "../components/Team.js";
import Footer from "../components/Footer.js";
import Showcase from "../components/Showcase.js";
import Faq from "../components/Faq.js";
import ScrollToTop from "../components/ScrollToTop.js";
import ImagePipeline from "../components/ImagePipe.tsx";

export default function Index() {
  return (
    <BrowserRouter>
      <main>
        <GlobalStyles />
        <ThemeProvider theme={light}>
          <Navigation />
          <Home />
          <About />
          <Roadmap />
          <Showcase />
          <Team />
          <Faq />
          <Footer />
          <ScrollToTop />
          <div>
            <ImagePipeline />
          </div>
        </ThemeProvider>
      </main>
    </BrowserRouter>
  );
}