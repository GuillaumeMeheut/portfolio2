import type { AppProps } from 'next/app'
import './_app.scss'
import { Transition } from 'app/components/transition'
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react'
import { isMobile } from 'utils/isMobile'
import style from 'config/index.module.scss'
import Script from 'next/script'

const PAGE_MAX_WIDTH = parseFloat(style.pageMaxWidth) * 10 + 80

function MyApp({ Component, pageProps, router }: AppProps) {
  function onResize() {
    const width = document.body.clientWidth
    const fontSize = isMobile()
      ? (width / 400) * 10
      : Math.min(1, width / PAGE_MAX_WIDTH) * 10
    document.body.style.fontSize = fontSize + 'px'
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <Transition Key={router.route} />
      <Component {...pageProps} />
      <Script id="hotjar" strategy="afterInteractive">
        {`
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6421632,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
         `}
      </Script>
    </>
  )
}

export default appWithTranslation(MyApp)
