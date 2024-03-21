import { AppImage } from 'app/components/image'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { ProjectProps } from 'utils/types'
import { ProjectHeader } from './header'
import css from './index.module.scss'
import { motion } from 'framer-motion'
import { ProjectFooter } from './footer'

type Props = {
  project: ProjectProps
}

export const Project = ({ project }: Props) => {
  const t1 = useTranslation('project')

  return (
    <section className={css.container}>
      <ProjectHeader />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <AppImage
          src={project.imgHeader}
          alt="img"
          widthImg={1000}
          heightImg={1000}
          className={css.imgHeader}
          priority
          objectFit="contain"
          objectPos="50% 50%"
        />
      </motion.div>
      <div className={css.contentContainer}>
        <div className={css.presentationContainer}>
          <h4 className={css.title}>{project.title}</h4>
          <div className={css.linksContainer}>
            {project.linkWebsite && (
              <Link href={project.linkWebsite} passHref>
                <a target={'_blank'}>{t1.t('website_link')}</a>
              </Link>
            )}

            {project.linkGithub && (
              <Link href={project.linkGithub} passHref>
                <a target={'_blank'}>Github Repo</a>
              </Link>
            )}
          </div>
          <div className={css.sectionStacks}>
            <h5>Stacks</h5>
            <ul className={css.stacks}>
              {project.stacks.map((stack, index) => {
                return <li key={index}>{stack}</li>
              })}
            </ul>
          </div>

          <div className={css.sectionPresentation}>
            <h5>Introduction</h5>
            <p dangerouslySetInnerHTML={{ __html: t1.t(project.intro) }} />
          </div>
        </div>
        <div className={css.imgsContainer}>
          {project.imgs.map((img, index) => {
            return (
              <figure key={index}>
                <AppImage
                  src={img.src}
                  alt={img.alt}
                  widthImg={1600}
                  heightImg={900}
                />
                <figcaption>{t1.t(img.caption)}</figcaption>
              </figure>
            )
          })}
        </div>
      </div>

      <ProjectFooter />
    </section>
  )
}
