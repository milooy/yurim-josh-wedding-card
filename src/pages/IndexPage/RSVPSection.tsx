import React from 'react';
import { COLORS } from 'src/assets/theme';
import { Button } from 'src/components/Button';
import Section from 'src/components/Section';

const RSVPSection = () => {
  return (
    <Section
      backgroundColor={COLORS.highlight3}
      title={`오프라인으로\n참석하시나요?`}
    >
      <p>
        코로나 19로 인해 좌석이 제한되어 있어요.
        <br />
        참가 인원과 함께 식사 여부를 알려주세요.
      </p>

      <Button
        backgroundColor="#8554ff"
        onClick={() => {
          window.open('https://forms.gle/wDUHn6snzFeaNha49');
        }}
      >
        참가 여부 알려주기
      </Button>

      <p style={{ fontSize: '0.9rem', marginTop: 10, paddingBottom: 0 }}>
        * 참가 인원이 바뀌게 된다면 따로 편하게 알려주세요.
      </p>
    </Section>
  );
};

export default RSVPSection;
