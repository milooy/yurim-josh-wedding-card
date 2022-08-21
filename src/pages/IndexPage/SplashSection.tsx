import React from 'react';
import styled from '@emotion/styled';

const SplashSection = () => {
  return (
    <div style={{ height: '100vh', color: 'white', scrollSnapAlign: 'start' }}>
      <JejuVideo />
      <FlexContainer>
        <MainHeading>유림, 기효 결혼해요!</MainHeading>
        <div>
          2022년 9월 17일 토요일 낮 12시
          <br />
          네이버 1784사옥
        </div>
        <HorizontalLine style={{ marginTop: '5vh' }} />
      </FlexContainer>
    </div>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  text-align: center;
`;

const MainHeading = styled.h1`
  margin: 10vh 0 24px;
`;

const HorizontalLine = styled.div`
  height: 40vh;
  border-left: 1px solid white;
`;

const JejuVideo = () => {
  return (
    <video
      controls={false}
      loop
      muted
      autoPlay
      playsInline
      style={{
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'absolute',
        zIndex: -1,
      }}
    >
      <source src={'/jejuVideo.mp4'} />
    </video>
  );
};

export default SplashSection;
