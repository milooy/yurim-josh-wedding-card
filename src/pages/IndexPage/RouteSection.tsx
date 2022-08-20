import React, { useEffect, useRef } from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';

const RouteSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight1} title="오시는 길">
      <div style={{ marginBottom: 22 }}>
        <span style={{ fontSize: '1.2rem' }}>
          네이버 1784사옥 28층 스카이홀
        </span>
        <br />
        <span style={{ fontSize: '0.9rem' }}>
          경기 성남시 분당구 정자일로 95
        </span>
      </div>
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
      timestamp: '1661008104161',
      key: '2bfne',
      mapHeight: '360',
    }).render();
    rendered.current += 1;
  }, []);

  return (
    <div
      id="daumRoughmapContainer1661008104161"
      className="root_daum_roughmap root_daum_roughmap_landing"
      style={{ width: '100%' }}
    ></div>
  );
};

export default RouteSection;
