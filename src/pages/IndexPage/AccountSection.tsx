import React from 'react';
import { COLORS } from 'src/assets/theme';
import Collapsible from 'src/components/Collapsible';
import Section from 'src/components/Section';
import copyTextToClipboard from 'src/utils/copyToClipboard';

const AccountSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight2} title="멀리서 마음 전하기">
      <Collapsible
        title="신부측 계좌번호 보기"
        contents={
          <div>
            <CopyInfo />
            <Acocunt
              bankName="하나은행"
              accountNo="742-910051-74007"
              name="진유림"
            />
            <Acocunt
              bankName="국민은행"
              accountNo="473-201010-03539"
              name="김은숙"
            />
          </div>
        }
      />
      <Collapsible
        title="신랑측 계좌번호 보기"
        contents={
          <div>
            <CopyInfo />
            <Acocunt
              bankName="하나은행"
              accountNo="742-910051-74007"
              name="장기효"
            />
            <Acocunt
              bankName="하나은행"
              accountNo="742-910051-74007"
              name="장채환"
            />
            <Acocunt
              bankName="하나은행"
              accountNo="742-910051-74007"
              name="서순옥"
            />
          </div>
        }
      />
      <div>
        축의금을 보내셨다면 알려주세요.
        <br />
        감사 인사를 드리고 싶습니다.
      </div>
    </Section>
  );
};

const CopyInfo = () => (
  <div style={{ fontSize: '0.9em', fontStyle: 'italic', marginBottom: 3 }}>
    클릭하면 계좌번호가 복사됩니다.
  </div>
);

const Acocunt = ({
  bankName,
  accountNo,
  name,
}: {
  bankName: string;
  accountNo: string;
  name: string;
}) => {
  return (
    <div
      onClick={() => {
        copyTextToClipboard(accountNo, () => {
          alert(`${name}님의 ${bankName} 계좌번호를 복사했습니다.`);
        });
      }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 5,
      }}
    >
      <div>{bankName}</div>
      <div>{accountNo}</div>
      <div>{name}</div>
    </div>
  );
};

export default AccountSection;
