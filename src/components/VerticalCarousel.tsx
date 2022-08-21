import React from 'react';

import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';

export const VerticalCarousel = ({
  images,
  showSmallerImageOnMobile = false,
  alt,
}: {
  images: StaticImageData[];
  alt: string;
  showSmallerImageOnMobile?: boolean;
}) => {
  return (
    <VerticalContainer showSmallerImageOnMobile={showSmallerImageOnMobile}>
      {images.map((pic, index) => (
        <Image src={pic} key={index} alt={alt} draggable={false} />
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
    @media (min-width: 800px) {
      width: ${({
        showSmallerImageOnMobile,
      }: {
        showSmallerImageOnMobile: boolean;
      }) => (showSmallerImageOnMobile ? '60%' : '90%')} !important;
    }
    scroll-snap-align: start;
  }
`;
