import { About } from 'app/blocks/about'
import { Layout } from 'app/components/layout'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'about'])),
    },
  }
}

const AboutPage: NextPage = () => {
  const t1 = useTranslation('about')

  return (
    <Layout title={t1.t('title')} keywords={t1.t('keywords')}>
      <About />
    </Layout>
  )
}

export default AboutPage
