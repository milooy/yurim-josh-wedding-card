import { track } from '@amplitude/analytics-browser';
import styled from '@emotion/styled';
import React from 'react';

export const Button = ({
  children,
  onClick,
  backgroundColor = 'black',
  style,
}: {
  children: string;
  onClick: () => void;
  backgroundColor?: string;
  style?: React.CSSProperties;
}) => (
  <ButtonWrapper
    backgroundColor={backgroundColor}
    onClick={() => {
      track(children);
      onClick();
    }}
    style={style}
  >
    {children}
  </ButtonWrapper>
);

const ButtonWrapper = styled.button`
  background: ${({ backgroundColor }: { backgroundColor: string }) =>
    backgroundColor};
  border: 1px solid #000000b5;
  color: white;
  width: 100%;
  max-width: 800px;
  padding: 20px 13px;
  border-radius: 6px;
  font-size: 1rem;
`;

export const YoutubeButton = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <Button
      backgroundColor="#ef0014"
      onClick={() => window.open('https://youtu.be/Hvvhsmk_MlU')}
      style={style}
    >
      유튜브 라이브 시청하기
    </Button>
  );
};

export const RSVPButton = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <>
      <Button
        backgroundColor="#8554ff"
        onClick={() => {
          window.open('https://forms.gle/wDUHn6snzFeaNha49');
        }}
        style={style}
      >
        참가 여부 알려주기
      </Button>
      <div style={{ fontSize: '0.9rem', marginTop: 10, paddingBottom: 0 }}>
        * 수정이 필요하다면 한번 더 작성해주시면 됩니다
      </div>
    </>
  );
};
