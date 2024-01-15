import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="max_logo.png" />
      </Head>
      <body data-theme="light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
