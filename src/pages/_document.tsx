import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="max_logo.png" />
        <meta name="keywords" content="오버워치2, 첫구매10%할인" />
        <meta
          name="naver-site-verification"
          content="523d5596e009b7e5fce9c2038915e67947c45ed8"
        />
        <meta
          name="google-site-verification"
          content="2Y9LpKRMZs2DP2S4h1nJ-WghojYTxoAVuMRx3el3glo"
        />
      </Head>
      <body data-theme="light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
