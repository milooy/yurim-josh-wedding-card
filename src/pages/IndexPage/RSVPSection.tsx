import React from 'react';
import { COLORS } from 'src/assets/theme';
import { RSVPButton } from 'src/components/Button';
import Section from 'src/components/Section';

const RSVPSection = () => {
  return (
    <Section
      backgroundColor={COLORS.highlight3}
      title={`오프라인으로\n참석하시나요?`}
    >
      <p>
        오프라인 예식에 참석하시는 분들은 아래 버튼으로 참가 인원과 식사 여부를
        알려주세요. 예식 준비에 많은 도움이 됩니다 😄
      </p>

      <RSVPButton />
    </Section>
  );
};

export default RSVPSection;
