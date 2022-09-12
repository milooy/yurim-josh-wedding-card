import React from 'react';
import { COLORS } from 'src/assets/theme';
import { YoutubeButton } from 'src/components/Button';
import Section from 'src/components/Section';

const OnlineSection = () => {
  return (
    <Section
      backgroundColor={COLORS.highlight3}
      title={`유튜브로도\n볼 수 있어요!`}
    >
      <div>
        <p>
          코로나19로 오프라인 참석이 어려운 분들께서는
          <br />
          온라인으로 함께할 수 있습니다.
        </p>
        <p>
          당일 진행되는 유튜브 라이브에서 댓글로 함께해주세요.
          <br />
          저희도 나중에 돌려보며 재밌게 댓글을 읽고 싶어요!
        </p>
      </div>
      <YoutubeButton />
    </Section>
  );
};

export default OnlineSection;
