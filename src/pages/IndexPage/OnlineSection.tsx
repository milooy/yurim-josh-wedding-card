import styled from '@emotion/styled';
import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';

const OnlineSection = () => {
  return (
    <Section
      backgroundColor={COLORS.highlight1}
      title={`유튜브로도\n볼 수 있어요!`}
    >
      <div>
        <p>
          코로나19로 오프라인 참석이 어려운 분들께서는
          <br />
          온라인으로 함께할 수 있습니다.
        </p>
        <p>
          당일 진행되는 유튜브 라이브에서 댓글로 함께해주세요.
          <br />
          저희도 나중에 돌려보며 재밌게 댓글을 읽고 싶어요!
        </p>
      </div>
      <YoutubeButton
        onClick={() =>
          window.open(
            'https://www.youtube.com/channel/UCX04UECIFaAjNnsak6GzpZg',
          )
        }
      />
    </Section>
  );
};

const YoutubeButton = ({ onClick }: { onClick: () => void }) => {
  return <Button onClick={onClick}>캡틴판교 유튜브</Button>;
};

const Button = styled.button`
  background: #ef0014;
  border: 1px solid #000000b5;
  color: white;
  width: 100%;
  max-width: 800px;
  padding: 20px 13px;
  border-radius: 6px;
  font-size: 1rem;
`;

export default OnlineSection;
