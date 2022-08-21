import React from 'react';
import Footer from 'src/components/Footer';
import { ScrollSnapOnlyInPC } from 'src/components/ScrollSnapOnlyInPC';
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
    <ScrollSnapOnlyInPC>
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
    </ScrollSnapOnlyInPC>
  );
};

export default IndexPage;
