import React, { useEffect, useRef } from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import { BorderedTable } from 'src/components/Table';

const GwangjooRouteSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight2} title="사전 피로연 오시는 길">
      <div>
        평소 저희들을 아껴주시는 광주 어른들과 친지들을 모시고 결혼식 2주 전
        피로연을 올리려 합니다.
      </div>
      <InfoTable />
      <KakaoMap />
    </Section>
  );
};

const InfoTable = () => {
  return (
    <BorderedTable style={{ margin: '1.2rem 0', position: 'relative' }}>
      <tbody>
        <tr>
          <td>언제</td>
          <td>
            2022년 9월 3일 토요일
            <br />
            저녁 5:30 - 8:00
          </td>
        </tr>
        <tr>
          <td>어디서</td>
          <td>웨딩그룹 위더스 광주</td>
        </tr>
      </tbody>
    </BorderedTable>
  );
};

const KakaoMap = () => {
  let rendered = useRef(0);

  useEffect(() => {
    if (rendered.current !== 0) {
      return;
    }
    new daum.roughmap.Lander({
      timestamp: '1661011166810',
      key: '2bfng',
      mapHeight: '200',
    }).render();
    rendered.current += 1;
  }, []);

  return (
    <div
      id="daumRoughmapContainer1661011166810"
      className="root_daum_roughmap root_daum_roughmap_landing"
      style={{ width: '100%' }}
    ></div>
  );
};

export default GwangjooRouteSection;
