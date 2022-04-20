import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Contact } from 'app/blocks/contact'
import { Layout } from 'app/components/layout'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'contact'])),
    },
  }
}

const Home: NextPage = () => {
  const t1 = useTranslation('contact')

  return (
    <Layout title={t1.t('title')} keywords={t1.t('keywords')}>
      <Contact />
    </Layout>
  )
}

export default Home
