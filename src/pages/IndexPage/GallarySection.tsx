import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import styled from '@emotion/styled';
import { JEJU_PICS, STUDIO_PICS } from 'src/assets/images';
import { VerticalCarousel } from 'src/components/VerticalCarousel';

const Heading = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 14px;
`;

const GallarySection = () => {
  return (
    <Section backgroundColor={COLORS.highlight3} title={`사진 구경하기`}>
      <Heading>
        <a
          href="https://www.instagram.com/studiopeople.kr.self/"
          target="_blank"
          rel="noreferrer"
        >
          셀프스튜디오
        </a>
        에서 20분 컷으로 찍은 사진이에요.
      </Heading>
      <VerticalCarousel
        images={STUDIO_PICS}
        alt="셀프스튜디오 사진"
        showSmallerImageOnMobile={true}
      />
      <Heading style={{ marginTop: 48 }}>
        오랜 동료{' '}
        <a
          href="https://www.instagram.com/20_moments/"
          target="_blank"
          rel="noreferrer"
        >
          영진님
        </a>
        이 제주도에서 찍어준 사진이에요.
      </Heading>
      <VerticalCarousel alt="제주도 웨딩 사진" images={JEJU_PICS} />
      <Heading style={{ marginTop: 48 }}>
        곧 제주에서 웨딩영상 브랜드를 런칭할{' '}
        <a
          href="https://www.instagram.com/imd.film/"
          target="_blank"
          rel="noreferrer"
        >
          대혁님
        </a>
        이 찍어준 영상이에요.
      </Heading>

      <YouTubeEmbed />
    </Section>
  );
};

const YouTubeEmbed = () => (
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/SVtq2m0853s?controls=0&amp;autoplay=1&amp;mute=1"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);
export default GallarySection;
