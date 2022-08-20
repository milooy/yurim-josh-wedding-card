import React from "react";
import { COLORS } from "src/assets/theme";
import Section from "src/components/Section";

const AccountSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight2} title="마음 전하기">
      계좌 관련 내용
    </Section>
  );
};

export default AccountSection;
