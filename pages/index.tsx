import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Header } from 'app/components/header'

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'projects'])),
    },
  }
}

const Home: NextPage = () => {
  return (
    <>
      <h2>Index</h2>
      <Header />
    </>
  )
}

export default Home
