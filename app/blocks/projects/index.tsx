import css from './index.module.scss'
import { ProjectProps } from 'utils/types'
import { AppImage } from 'app/components/image'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import Arrow from 'public/assets/arrow_down_right.svg'
import { AnimatedTextBand } from 'app/components/AnimatedTextBand'
import { motion } from 'framer-motion'
import { useState } from 'react'

type Props = {
  projectsData: ProjectProps[]
}

export const Projects = ({ projectsData }: Props) => {
  const t1 = useTranslation('projects')

  return (
    <section id="projects" className={css.section}>
      <ul className={css.projectsContainer}>
        {projectsData.map((project, index) => {
          return <ProjectCard key={project.id} project={project} />
        })}
      </ul>
    </section>
  )
}

type CardProjectProps = {
  project: ProjectProps
}

const ProjectCard = ({ project }: CardProjectProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  return (
    <li>
      <Link href={`/project/${project.id}`} passHref>
        <a>
          <AppImage
            src={project.imgIntro}
            widthImg={1920}
            heightImg={1080}
            alt={'img'}
            className={css.projectImg}
          />
        </a>
      </Link>
      <motion.div
        className={css.captionContainer}
        onViewportEnter={() => setIsVisible(true)}
        onViewportLeave={() => setIsVisible(false)}
      >
        <AnimatedTextBand
          text="Doublecard"
          classname={css.title}
          isVisible={isVisible}
          delay={0}
        />
        <AnimatedTextBand
          text="Ceci est la description de mon projet"
          classname={css.caption}
          isVisible={isVisible}
          delay={0.1}
        />
        <div className={css.typeArrowContainer}>
          <AnimatedTextBand
            text="Personnal"
            classname={css.type}
            isVisible={isVisible}
            delay={0.3}
          />
          <Link href={`/project/${project.id}`} passHref>
            <a>
              <AppImage
                src={Arrow}
                alt={'arrow down right'}
                className={css.img}
              />
            </a>
          </Link>
        </div>
      </motion.div>
    </li>
  )
}
