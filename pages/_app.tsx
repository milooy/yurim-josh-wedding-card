import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>유림, 기효 결혼해요</title>
        <meta
          name="description"
          content="9월 17일 토요일 12시, 네이버 1784사옥 28층 스카이홀"
        />
        {/* open graph */}
        <meta property="og:title" content="유림, 기효 결혼해요" />
        <meta
          property="og:description"
          content="9월 17일 토요일 12시, 네이버 1784사옥 28층 스카이홀"
        />
        <meta property="og:image" content="./couple.png" />
        <meta
          property="og:url"
          content="https://yurim-josh-wedding-card.vercel.app/"
        />
        {/* twitter open graph */}
        <meta name="twitter:title" content="유림, 기효 결혼해요" />
        <meta name="twitter:image" content="./couple.png" />
        <meta
          name="twitter:url"
          content="https://yurim-josh-wedding-card.vercel.app/"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          className="daum_roughmap_loader_script"
          src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"
        ></script>
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;
