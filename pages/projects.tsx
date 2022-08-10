import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Projects } from 'app/blocks/projects'
import { Layout } from 'app/components/layout'
import { useTranslation } from 'next-i18next'
import { ProjectProps } from 'utils/types'
import { data } from 'public/projects'
import Background from 'app/components/background'

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
    <Layout title={t1.t('title')} keywords={t1.t('keywords')}>
      <Projects projectsData={projectsData} />
    </Layout>
  )
}

export default ProjectsPage
