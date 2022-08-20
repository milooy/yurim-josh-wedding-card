import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import { TimelineTable } from 'src/components/Table';

const TimelineSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight2} title="그 날의 일정">
      <TimelineTable>
        <tbody>
          <tr>
            <td>11:30</td>
            <td>
              <strong>식장 입장</strong>
              <ul>
                <li>오랜만에 만난 지인들과 인사해요.</li>
                <li>인생네컷 사진도 찍을 수 있어요.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>
              <strong>1부 본식</strong>
              <ul>
                <li>주례 없는 결혼식. 오랜 친구가 사회를 봐주어요.</li>
                <li>가수 자격증이 있는 기효는 신나게 노래를 부를거예요.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>12:30</td>
            <td>
              <strong>2부 파티</strong>
              <ul>
                <li>음식을 먹어요.</li>
                <li>기효 유림이 좋아하는 와인도 쌓아둘거예요.</li>
                <li>퀴즈를 맞추고 상품을 가져가요.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </TimelineTable>
    </Section>
  );
};

export default TimelineSection;
