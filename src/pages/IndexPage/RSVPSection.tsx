import React from "react";
import { COLORS } from "src/assets/theme";
import Section from "src/components/Section";

const TimelineSection = () => {
  return (
    <Section
      backgroundColor={COLORS.highlight3}
      title={`오프라인으로\n참석하시나요?`}
    >
      <div>
        작은 파티같은 결혼식을 준비중이기에
        <br />
        참석자 명단을 파악하고 있어요.
        <br />
        성함과 참가 인원을 알려주세요!
      </div>
    </Section>
  );
};

export default TimelineSection;
