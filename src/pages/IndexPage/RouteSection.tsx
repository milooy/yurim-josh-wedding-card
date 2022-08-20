import React, { useEffect, useRef } from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';

const RouteSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight1} title="오시는 길">
      <KakaoMap />
    </Section>
  );
};

const KakaoMap = () => {
  let rendered = useRef(0);

  useEffect(() => {
    if (rendered.current !== 0) {
      return;
    }
    new daum.roughmap.Lander({
      timestamp: '1661004429477',
      key: '2bfna',
      mapWidth: '380',
      mapHeight: '360',
    }).render();
    rendered.current += 1;
  }, []);

  return (
    <div
      id="daumRoughmapContainer1661004429477"
      className="root_daum_roughmap root_daum_roughmap_landing"
    ></div>
  );
};

export default RouteSection;
