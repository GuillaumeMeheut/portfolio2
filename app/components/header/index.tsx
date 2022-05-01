import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import css from './index.module.scss'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

export const Header = () => {
  const router = useRouter()
  const t1 = useTranslation('header')

  return (
    <header className={css.header}>
      <h1>Guillaume Meheut</h1>
      <nav>
        <Link href={'/'} passHref>
          <a>{t1.t('project')}</a>
        </Link>
        <Link href={'/about'} passHref>
          <a>{t1.t('about')}</a>
        </Link>
        <Link href={'/contact'} passHref>
          <a>{t1.t('contact')}</a>
        </Link>
        <Link
          href={router.pathname}
          locale={t1.t('lang').toLowerCase()}
          passHref
        >
          <a>{t1.t('lang')}</a>
        </Link>
      </nav>
    </header>
  )
}
