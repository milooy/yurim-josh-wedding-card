import React from "react";
import { COLORS } from "src/assets/theme";
import Section from "src/components/Section";

const RouteSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight1} title="오시는 길">
      옵바 여기에 네비게이션을 넣어주세요!
    </Section>
  );
};

export default RouteSection;
