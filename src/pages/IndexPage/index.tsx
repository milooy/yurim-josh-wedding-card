import React from 'react';
import Footer from 'src/components/Footer';
import AccountSection from './AccountSection';
import CommentSection from './CommentSection';
import GwangjooRouteSection from './GwangjooRouteSection';
import IntroSection from './IntroSection';
import OnlineSection from './OnlineSection';
import RouteSection from './RouteSection';
import RSVPSection from './RSVPSection';
import ShareSection from './ShareSection';
import SplashSection from './SplashSection';
import TimelineSection from './TimelineSection';

const IndexPage = () => {
  return (
    <div>
      {/* <NavBar /> */}

      <SplashSection />
      <IntroSection />
      <TimelineSection />

      <RouteSection />
      <GwangjooRouteSection />
      <OnlineSection />
      <RSVPSection />
      <AccountSection />
      <ShareSection />
      <CommentSection />

      <Footer />
    </div>
  );
};

export default IndexPage;
