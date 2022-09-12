import React from 'react';
import { COLORS } from 'src/assets/theme';
import { RSVPButton, YoutubeButton } from 'src/components/Button';
import Section from 'src/components/Section';
import Image from 'next/image';
import tobox from 'public/tobox.png';
import gift from 'public/gift.png';

const NoticeSection = () => {
  return (
    <Section
      backgroundColor={COLORS.highlight3}
      title={`헉! 결혼식이\n이번주예요!`}
    >
      <p>미리 알아두면 편한 것들을 말씀드려요.</p>
      <ul style={{ listStyle: 'none', margin: 0 }}>
        <QnA
          question="참가할 수 있어요!"
          answer={
            <>
              오프라인 예식에 참석하시는 분들은 아래 버튼으로 참가 인원과 식사
              여부를 알려주세요. 예식 준비에 많은 도움이 됩니다 😄
              <RSVPButton style={{ marginTop: 3 }} />
            </>
          }
        />
        <QnA
          question="주차는 어디에 하나요?"
          answer="네이버 1784 건물 지하 2층부터 지하 4층까지 주차하시면 됩니다. 주차는 무료이고 시간제한은 없습니다."
        />
        <QnA
          question="식장으로 어떻게 들어가요?"
          answer="1층 로비로 가면 안내 배너와 스태프가 있을거예요. 안내를 받아 보안문 안쪽에 있는 고층부 엘리베이터(H)를 타고 28층으로 올라오시면 됩니다."
        />
        <QnA
          question="몇시까지 가면 돼요?"
          answer={
            <>
              11시부터 오픈해요. 웨딩홀 안에 포토부스가 있으니 같이 온 분들이나
              유림 기효와 함께 사진을 찍어주세요. 찍은 사진 한 장은 가져가고
              다른 한 장은 방명록에 붙여주세요.
              <Image
                src={tobox}
                alt="포토부스 예시"
                draggable={false}
                style={{ marginTop: 3 }}
              />
            </>
          }
        />
        <QnA
          question="2부 파티가 뭐예요?"
          answer={
            <>
              거창한 파티는 아니에요 ㅎㅎ 식사를 다할 때쯤 같이 건배사 하고
              퀴즈를 맞추는거예요.
              <br />
              자리를 빛내주신 여러분께 보답하고자 저희가 굶어가며 선물을
              준비했으니 시간 괜찮으신 분들은 참여하고 가셔요! 명함 이벤트도
              있으니 명함도 챙겨오시면 좋아요 😄
              <Image
                src={gift}
                alt="선물"
                draggable={false}
                style={{ marginTop: 3 }}
              />
            </>
          }
        />
        <QnA
          question="아쉽게 못 가게 되었어요 ㅜㅜ"
          answer={
            <>
              유튜브 라이브를 준비했습니다. 궁금하신 분들은 편하게 집에서
              봐주세요. 댓글도 달아주시면 이후에 저희가 챙겨보겠습니다 😄
              <YoutubeButton style={{ marginTop: 3 }} />
            </>
          }
        />
      </ul>
    </Section>
  );
};

function QnA({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  return (
    <li>
      <strong>Q. {question}</strong>
      <div style={{ padding: '0 0 1.6rem' }}>{answer}</div>
    </li>
  );
}

export default NoticeSection;
