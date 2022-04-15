import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import css from './index.module.scss'
import { useTranslation } from 'next-i18next'
import nookies from 'nookies'
import Link from 'next/link'

const variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
  },
  exit: {
    opacity: 1,
  },
}

export const Header = () => {
  const router = useRouter()
  const t1 = useTranslation('header')

  return (
    <header>
      <h1>Guillaume Meheut</h1>
      <nav>
        <p>{router.pathname === '/' ? t1.t('about') : t1.t('project')}</p>
      </nav>
      <Link
        href={router.pathname + t1.t('lang').toLowerCase()}
        locale={t1.t('lang').toLowerCase()}
        passHref
      >
        <a>{t1.t('lang')}</a>
      </Link>
    </header>
  )
}
