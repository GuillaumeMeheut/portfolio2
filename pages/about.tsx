import { Header } from 'app/components/header'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'about'])),
    },
  }
}

const About: NextPage = () => {
  return (
    <>
      <Header />
    </>
  )
}

export default About
