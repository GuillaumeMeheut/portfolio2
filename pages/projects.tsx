import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Projects } from 'app/blocks/projects'
import { Layout } from 'app/components/layout'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { data, ProjectProps } from 'utils/projects'

export async function getStaticProps({ locale }) {
  return {
    props: {
      projectsData: data,
      ...(await serverSideTranslations(locale, ['header', 'projects'])),
    },
  }
}

type Props = {
  projectsData: ProjectProps[]
}

const ProjectsPage: NextPage = ({ projectsData }: Props) => {
  const t1 = useTranslation('projects')

  return (
    <motion.div>
      <Layout title={t1.t('title')} keywords={t1.t('keywords')}>
        <Projects projectsData={projectsData} />
      </Layout>
    </motion.div>
  )
}

export default ProjectsPage
