import { Project } from 'app/blocks/project'
import { Layout } from 'app/components/layout'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { data } from 'public/projects'
import { ProjectProps } from 'utils/types'

export async function getStaticPaths({ locales }) {
  const paths = data
    .map((project: ProjectProps) =>
      locales.map((locale) => ({
        params: { id: String(project.id) },
        locale,
      })),
    )
    .flat()

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ locale, params }) {
  const { id } = params
  const project = data[id - 1]
  return {
    props: {
      project,
      ...(await serverSideTranslations(locale, ['header', 'project'])),
    },
  }
}

type Props = {
  project: ProjectProps
}

const ProjectPage: NextPage = ({ project }: Props) => {
  return (
    <Layout title={'Guillaume Meheut | ' + project.title}>
      <Project project={project} />
    </Layout>
  )
}

export default ProjectPage
