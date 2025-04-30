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
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            id="hotjar"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:6384688,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
            }}
          />
        </body>
      </Html>
    )
  }
}
