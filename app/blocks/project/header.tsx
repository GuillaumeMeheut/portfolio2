import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import css from './header.module.scss'

export const ProjectHeader = () => {
  const router = useRouter()
  const t1 = useTranslation('header')

  return (
    <header className={css.header}>
      <Link href={'/'} passHref>
        <a className={css.back}>{t1.t('back')}</a>
      </Link>
      <Link href={router.asPath} locale={t1.t('lang').toLowerCase()} passHref>
        <a className={css.lang}>{t1.t('lang')}</a>
      </Link>
    </header>
  )
}
