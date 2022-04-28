import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Project } from 'app/blocks/project'
import { Layout } from 'app/components/layout'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'projects'])),
    },
  }
}

const Home: NextPage = () => {
  const t1 = useTranslation('projects')

  return (
    <Layout title={t1.t('title')} keywords={t1.t('keywords')}>
      <Project />
    </Layout>
  )
}

export default Home