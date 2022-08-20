import React from "react";
import Footer from "src/components/Footer";
import NavBar from "src/components/NavBar";
import IntroSection from "./IntroSection";
import RSVPSection from "./RSVPSection";
import SplashSection from "./SplashSection";
import TimelineSection from "./TimelineSection";

const IndexPage = () => {
  return (
    <div>
      {/* <NavBar /> */}

      <SplashSection />
      <IntroSection />
      <TimelineSection />
      <RSVPSection />

      <Footer />
    </div>
  );
};

export default IndexPage;
