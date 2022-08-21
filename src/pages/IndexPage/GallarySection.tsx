import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';
import { JEJU_PICS, STUDIO_PICS } from 'src/assets/images';

const Heading = styled.h3`
  font-size: 1.1rem;
  font-weight: normal;
  margin-bottom: 14px;
`;

const VerticalCarousel = ({ images }: { images: StaticImageData[] }) => {
  return (
    <VerticalContainer>
      {images.map((pic, index) => (
        <Image src={pic} key={index} alt="결혼 사진" draggable={false} />
      ))}
    </VerticalContainer>
  );
};

const VerticalContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  > span {
    flex: 0 0 auto;
    width: 90% !important;
    scroll-snap-align: start;
  }
`;

const GallarySection = () => {
  return (
    <Section backgroundColor={COLORS.highlight3} title={`사진 구경하기`}>
      <Heading>셀프스튜디오에서도 찍고</Heading>
      <VerticalCarousel images={STUDIO_PICS} />
      <Heading style={{ marginTop: '4rem' }}>
        제주도에서 금손 영진님이 사진을,
      </Heading>
      <VerticalCarousel images={JEJU_PICS} />
      <Heading style={{ marginTop: '4rem' }}>
        금손 대혁님이 영상을 찍어주셨어요.
      </Heading>

      <YouTubeEmbed />
    </Section>
  );
};

const YouTubeEmbed = () => (
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/SVtq2m0853s?controls=0"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);
export default GallarySection;
