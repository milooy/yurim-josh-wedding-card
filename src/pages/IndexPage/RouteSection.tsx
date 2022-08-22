import React, { useEffect, useRef } from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';

const RouteSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight1} title="본식 오시는 길">
      <div style={{ marginBottom: 22 }}>
        <span style={{ fontSize: '1.2rem' }}>
          네이버 1784사옥 28층 스카이홀
        </span>
        <br />
        <span style={{ fontSize: '0.9rem' }}>
          경기 성남시 분당구 정자일로 95
        </span>
      </div>
      <NaverMap />
      {/* <KakaoMap /> */}
    </Section>
  );
};

declare const naver: any;

const NaverMap = () => {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 14,
      zoomControl: true,
      zoomControlOptions: {
        //줌 컨트롤의 옵션
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map('_naver_map', mapOptions);
    const marker = new naver.maps.Marker({
      position: map.getCenter(),
      map: map,
    });
    new naver.maps.InfoWindow({
      content: '<div style="font-size: 0.9rem">네이버 1784</div>',
    }).open(map, marker);
  }, []);

  return <div id="_naver_map" style={{ width: '100%', height: '250px' }}></div>;
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
      mapHeight: '200',
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
