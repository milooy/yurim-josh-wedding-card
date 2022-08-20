import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import { TimelineTable } from 'src/components/Table';

const TimelineSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight2} title="행사 일정">
      <TimelineTable>
        <tbody>
          <tr>
            <td>12:00</td>
            <td>
              본식
              <br />
              어쩌구
            </td>
          </tr>
          <tr>
            <td>13:00</td>
            <td>
              피로연
              <br />
              어쩌구저쩌구
            </td>
          </tr>
        </tbody>
      </TimelineTable>
    </Section>
  );
};

export default TimelineSection;
