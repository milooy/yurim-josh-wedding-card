import styled from '@emotion/styled';
import React from 'react';
import { GREYS } from 'src/assets/theme';

const TimelineSection = () => {
  return (
    <Footer>
      <h3>CREDITS</h3>
      <table>
        <tbody>
          <tr>
            <td>디자인</td>
            <td>정윤지</td>
          </tr>
          <tr>
            <td>개발</td>
            <td>진유림, 장기효</td>
          </tr>
          <tr>
            <td>일러스트</td>
            <td>진유림</td>
          </tr>
        </tbody>
      </table>
    </Footer>
  );
};

const Footer = styled.footer`
  background: ${GREYS.grey1};
  color: white;
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;

export default TimelineSection;
