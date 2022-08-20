import "../styles/globals.css";
import type { AppProps } from "next/app";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>유림, 기효 결혼해요</title>
        <meta
          name="description"
          content="9월 17일 토요일, 네이버 1784사옥 28층 스카이홀"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;
