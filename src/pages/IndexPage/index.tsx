import React, { useEffect } from 'react';
import Footer from 'src/components/Footer';
import AccountSection from './AccountSection';
import GallarySection from './GallarySection';
import IntroSection from './IntroSection';
import OnlineSection from './OnlineSection';
import RouteSection from './RouteSection';
import SplashSection from './SplashSection';
import TimelineSection from './TimelineSection';
import NoticeSection from './NoticeSection';
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
    <>
      {/* <NavBar /> */}

      <SplashSection />
      <IntroSection />
      <NoticeSection />
      <TimelineSection />

      <RouteSection />
      {/* <GwangjooRouteSection /> */}
      <OnlineSection />
      {/* <RSVPSection /> */}
      <AccountSection />
      {/* <ShareSection /> */}
      <GallarySection />

      <Footer />
    </>
  );
};

export default IndexPage;
