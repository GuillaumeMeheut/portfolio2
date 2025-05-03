import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          {/* Metas */}
          <meta name="description" content="Portfolio de Guillaume Meheut" />
          <meta
            name="keywords"
            content="guillaume meheut, guillaume, meheut, portfolio, developpeur web, react, nextjs, next, javascript"
          />
          <meta name="author" content="Guillaume Meheut" />

          {/* Share */}
          <meta property="og:title" content="Portfolio | Guillaume Meheut" />
          <meta
            property="og:description"
            content="Portfolio de Guillaume Meheut"
          />
          <meta property="og:type" content="portfolio" />
          <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=BioRhyme+Expanded:wght@300;400&family=Gruppo&family=Lato:wght@100;200;300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            src="//script.crazyegg.com/pages/scripts/0129/3803.js"
            async={true}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
