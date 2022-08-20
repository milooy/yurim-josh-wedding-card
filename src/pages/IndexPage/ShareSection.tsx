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
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }
  });

  const shareLink = () => {
    shareKakaoMessage();
  };

  return <button onClick={shareLink}>공유하기</button>;
};

export default RouteSection;
