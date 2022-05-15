import { ProjectProps } from 'utils/projects'
import css from './index.module.scss'

type Props = {
  project: ProjectProps
}

export const Project = ({ project }: Props) => {
  return (
    <section className={css.container}>
      <div className={css.textContainer}>
        <h5>{project.title}</h5>
        <h6>{project.type}</h6>
      </div>
      {project.imgsUrl.map((url, index) => (
        <img src={url} alt={'image ' + index} />
      ))}
    </section>
  )
}
