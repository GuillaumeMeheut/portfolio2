import css from './index.module.scss'
import { ProjectProps } from 'utils/projects'
import { Tile } from './tile'

type Props = {
  projectsData: ProjectProps[]
}

export const Projects = ({ projectsData }: Props) => {
  return (
    <section className={css.section}>
      <ul className={css.projectContainer}>
        {projectsData.map((project) => {
          return (
            <Tile
              key={project.id}
              id={project.id}
              title={project.title}
              img={project.imgsUrl[0]}
            />
          )
        })}
      </ul>
    </section>
  )
}
