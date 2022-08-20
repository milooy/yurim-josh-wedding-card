import styled from '@emotion/styled';
import React from 'react';

export const Button = ({
  children,
  onClick,
  backgroundColor = 'black',
}: {
  children: React.ReactNode;
  onClick: () => void;
  backgroundColor?: string;
}) => (
  <ButtonWrapper backgroundColor={backgroundColor} onClick={onClick}>
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
