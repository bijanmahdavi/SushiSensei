import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="..." />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          type="text/javascript"
          src="./node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
      </body>
    </Html>
  );
}
