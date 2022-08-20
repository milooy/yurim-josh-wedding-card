import React, { useEffect } from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import { shareKakaoMessage } from 'utils/kakao';

const RouteSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight2}>
      <KakaoShare />
    </Section>
  );
};

const KakaoShare = () => {
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init('dce43601c312444ac6482e20a9a6b250');
    }
  });

  const shareLink = () => {
    shareKakaoMessage();
  };

  return <button onClick={shareLink}>공유하기</button>;
};

export default RouteSection;
