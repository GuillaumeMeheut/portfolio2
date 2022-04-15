import Document, { Html, Head, Main, NextScript } from 'next/document'

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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
