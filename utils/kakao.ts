function shareKakaoMessage() {
  Kakao.Share.sendDefault({
    objectType: 'location',
    address: '경기 성남시 분당구 정자일로 95',
    addressTitle: '네이버 1784',
    content: {
      title: '유림, 기효 결혼해요',
      description: '9월 17일 토요일 12시, 네이버 1784사옥 28층 스카이홀',
      imageUrl: 'https://yurim-josh-wedding-card.vercel.app/couple.png',
      link: {
        mobileWebUrl: 'https://yurim-josh-wedding-card.vercel.app/',
        webUrl: 'https://yurim-josh-wedding-card.vercel.app/',
      },
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: 'https://yurim-josh-wedding-card.vercel.app/',
          webUrl: 'https://yurim-josh-wedding-card.vercel.app/',
        },
      },
    ],
  });
}

export { shareKakaoMessage };
