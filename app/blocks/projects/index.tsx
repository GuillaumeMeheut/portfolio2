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
    <section className={css.section}>
      <ul className={css.projectsContainer}>
        {projectsData.map((project, index) => {
          return (
            <ProjectCard key={project.id} project={project} index={index} />
          )
        })}
      </ul>
    </section>
  )
}

type CardProjectProps = {
  project: ProjectProps
  index: number
}

const ProjectCard = ({ project, index }: CardProjectProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  return (
    <li>
      <Link href={`/project/${project.id}`} passHref>
        <a>
          <AppImage
            // src={project.imgIntro}
            src="/assets/doublecard0.png"
            widthImg={1920}
            heightImg={1080}
            alt={'img'}
            priority={index === 0 ? true : false}
            className={css.projectImg}
          />
          {/* <img src="/assets/doublecard0.png" alt="" /> */}
        </a>
      </Link>
      <motion.div
        className={css.captionContainer}
        onViewportEnter={() => setIsVisible(true)}
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
          <AppImage src={Arrow} alt={'arrow down right'} className={css.img} />
        </div>
      </motion.div>
    </li>
  )
}
