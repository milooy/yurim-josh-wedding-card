import styled from '@emotion/styled';

export const ScrollSnap = styled.div`
  overflow-y: auto;
  height: 100vh;
  scroll-snap-type: y mandatory;

  > * {
    scroll-snap-align: start;
  }
`;
