import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Project } from 'app/blocks/project'
import { Layout } from 'app/components/layout'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { InBuild } from 'app/components/inBuild'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'projects'])),
    },
  }
}

const ProjectsPage: NextPage = () => {
  const t1 = useTranslation('projects')

  const ref = useRef(null)

  const changeColor = (color) => {
    ref.current.style.background = color
  }

  return (
    <motion.div ref={ref}>
      {/* <InBuild /> */}
      <Layout title={t1.t('title')} keywords={t1.t('keywords')}>
        {/* <Project changeColor={changeColor} /> */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <p style={{ fontSize: '5em' }}>In build...</p>
        </div>
      </Layout>
    </motion.div>
  )
}

export default ProjectsPage
