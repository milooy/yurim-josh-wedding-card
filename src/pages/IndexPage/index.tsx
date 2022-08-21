import React, { useEffect } from 'react';
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
import * as amplitude from '@amplitude/analytics-browser';

const IndexPage = () => {
  useEffect(() => {
    const amplitudeKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
    if (amplitudeKey != null) {
      console.info('Initialized Amplitude!');
      amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!);
    }
  }, []);

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
