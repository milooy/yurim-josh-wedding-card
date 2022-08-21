import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';
import studio1 from 'public/photos/1.png';
import studio2 from 'public/photos/2.png';
import studio3 from 'public/photos/3.png';
import studio4 from 'public/photos/4.png';
import studio5 from 'public/photos/5.png';
import studio6 from 'public/photos/6.png';
import studio7 from 'public/photos/7.png';
import studio8 from 'public/photos/8.png';

import jeju1 from 'public/photos/jeju1.jpeg';
import jeju2 from 'public/photos/jeju2.jpeg';
import jeju3 from 'public/photos/jeju3.jpeg';
import jeju4 from 'public/photos/jeju4.jpeg';
import jeju5 from 'public/photos/jeju5.jpeg';
import jeju6 from 'public/photos/jeju6.jpeg';
import jeju7 from 'public/photos/jeju7.jpeg';
import jeju8 from 'public/photos/jeju8.jpeg';
import jeju9 from 'public/photos/jeju9.jpeg';
import jeju10 from 'public/photos/jeju10.jpeg';
import jeju11 from 'public/photos/jeju11.jpeg';
import jeju12 from 'public/photos/jeju12.jpeg';
import jeju14 from 'public/photos/jeju14.jpeg';

const Heading = styled.h3`
  font-size: 1.1rem;
  font-weight: normal;
  margin-bottom: 14px;
`;

const STUDIO_PICS = [
  studio1,
  studio2,
  studio3,
  studio4,
  studio5,
  studio6,
  studio7,
  studio8,
];
const JEJU_PICS = [
  jeju1,
  jeju2,
  jeju3,
  jeju4,
  jeju5,
  jeju6,
  jeju7,
  jeju8,
  jeju9,
  jeju10,
  jeju11,
  jeju12,
  jeju14,
];

const VerticalCarousel = ({ images }: { images: StaticImageData[] }) => {
  return (
    <VerticalContainer>
      {images.map((pic, index) => (
        <Image src={pic} key={index} alt="스튜디오 사진" />
      ))}
    </VerticalContainer>
  );
};

const VerticalContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
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
      {/* <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop
      >
        {studioPeoplePhotos.map(src => (
          <div key={src}>
            <img src={src} alt="" />
          </div>
        ))}
      </Carousel> */}
      <Heading style={{ marginTop: '4rem' }}>
        제주도에서 금손 영진님이 사진을,
      </Heading>

      <VerticalCarousel images={JEJU_PICS} />

      {/* <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop
      >
        {jejuPhotos.map((src, index) => (
          <div key={src}>
            <img src={src} alt="" />
          </div>
        ))}
      </Carousel> */}

      <Heading style={{ marginTop: '4rem' }}>
        금손 대혁님이 영상을 찍어주셨어요.
      </Heading>

      <YouTubeEmbed />
    </Section>
  );
};

const studioPeoplePhotos = [
  'https://user-images.githubusercontent.com/3839771/185758252-4ff13096-8797-4501-b3a8-5bc0e6c14cfe.jpg',
  'https://user-images.githubusercontent.com/3839771/185758251-872b6ed1-77f8-4c20-8455-67db198cd0cf.jpg',
  'https://user-images.githubusercontent.com/3839771/185758249-c4a498e4-256c-43de-99ca-b07c5540d0a2.jpg',
  'https://user-images.githubusercontent.com/3839771/185758247-3e7664f1-9b02-413d-b69b-8cc4ec868856.jpg',
  'https://user-images.githubusercontent.com/3839771/185758246-62f8fb82-bac3-4154-9622-358008edf853.jpg',
  'https://user-images.githubusercontent.com/3839771/185758244-d5f57fdd-b2df-43bf-ba93-725fa0acc4e1.jpg',
  'https://user-images.githubusercontent.com/3839771/185758243-1ef5b62d-9aab-44be-89fd-6719a15b6e68.jpg',
];

const jejuPhotos = [
  'https://user-images.githubusercontent.com/3839771/185758278-6eb83ef1-010c-4ab5-ad50-7f7e895b7b83.jpeg',
  'https://user-images.githubusercontent.com/3839771/185758264-c8fc8105-0ca7-4791-bb1e-223b45d54879.jpeg',
  'https://user-images.githubusercontent.com/3839771/185758267-8b640973-2a16-4926-89d4-366285ba5345.jpeg',
  'https://user-images.githubusercontent.com/3839771/185758279-893883bd-3cdb-476a-a50c-57bf60d8478e.jpeg',
  'https://user-images.githubusercontent.com/3839771/185758269-0a794790-ef4c-42d5-a320-024e1f78fb9f.jpeg',
  'https://user-images.githubusercontent.com/3839771/185758272-cf94f084-4a9e-474a-888e-be0d66b73c7b.jpeg',
  'https://user-images.githubusercontent.com/3839771/185758273-e23608f9-2092-4ff5-bacf-0ad7535ca998.jpeg',
  'https://user-images.githubusercontent.com/3839771/185758274-4c59c260-5738-474a-9792-fb6d732114ee.jpeg',
  'https://user-images.githubusercontent.com/3839771/185758277-4df686c9-9160-4da1-b0f5-d6fccb39d654.jpeg',
  'https://user-images.githubusercontent.com/3839771/185758282-c1e79ff2-e8f4-46ca-8f41-77c4796a9fc8.jpeg',
  'https://user-images.githubusercontent.com/3839771/185758283-d27b4b64-7874-44b4-bf1c-365b66dc2fb0.jpeg',
  'https://user-images.githubusercontent.com/3839771/185758285-b3112e06-7c2e-473a-993d-9077cf8f9e05.jpeg',
  'https://user-images.githubusercontent.com/3839771/185758289-26f3b912-1cf6-4bf0-b8e8-7c156e3c8b5d.jpeg',
];

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
