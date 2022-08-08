import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ProjectProps } from 'utils/types'
import css from './index.module.scss'

type Props = {
  project: ProjectProps
}

export const Project = ({ project }: Props) => {
  const router = useRouter()
  const t1 = useTranslation('header')
  return (
    <section className={css.container}>
      <div className={css.header}>
        <Link href={'/projects'} passHref>
          <a className={css.back}>{t1.t('back')}</a>
        </Link>
        <Link href={router.asPath} locale={t1.t('lang').toLowerCase()} passHref>
          <a className={css.lang}>{t1.t('lang')}</a>
        </Link>
      </div>

      {/* <div className={css.textContainer}>
        <h5>{project.title}</h5>
      </div> */}
    </section>
  )
}
