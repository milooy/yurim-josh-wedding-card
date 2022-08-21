import styled from '@emotion/styled';

export const ScrollSnapOnlyInPC = styled.div`
  @media (min-width: 800px) {
    overflow-y: auto;
    height: 100vh;
    scroll-snap-type: y mandatory;

    > * {
      scroll-snap-align: start;
    }
  }
`;
