import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Project } from 'app/blocks/project'
import { Layout } from 'app/components/layout'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'projects'])),
    },
  }
}

const Home: NextPage = () => {
  const t1 = useTranslation('projects')

  const ref = useRef(null)

  const changeColor = (color) => {
    ref.current.style.background = color
  }

  return (
    <motion.div ref={ref}>
      <Layout title={t1.t('title')} keywords={t1.t('keywords')}>
        <Project changeColor={changeColor} />
      </Layout>
    </motion.div>
  )
}

export default Home
