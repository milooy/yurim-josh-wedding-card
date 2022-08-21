import React from 'react';
import Footer from 'src/components/Footer';
import { ScrollSnap } from 'src/components/ScrollSnap';
import AccountSection from './AccountSection';
import GallarySection from './GallarySection';
import GwangjooRouteSection from './GwangjooRouteSection';
import IntroSection from './IntroSection';
import OnlineSection from './OnlineSection';
import RouteSection from './RouteSection';
import RSVPSection from './RSVPSection';
import SplashSection from './SplashSection';
import TimelineSection from './TimelineSection';

const IndexPage = () => {
  return (
    <ScrollSnap>
      {/* <NavBar /> */}

      <SplashSection />
      <IntroSection />
      <TimelineSection />

      <RouteSection />
      <GwangjooRouteSection />
      <OnlineSection />
      <RSVPSection />
      <AccountSection />
      {/* <ShareSection /> */}
      <GallarySection />

      <Footer />
    </ScrollSnap>
  );
};

export default IndexPage;
