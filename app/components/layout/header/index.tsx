import { useRouter } from 'next/router'
import css from './index.module.scss'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export const Header = () => {
  const router = useRouter()
  const t1 = useTranslation('header')

  return (
    <>
      {!/\d/.test(router.asPath) && (
        <header className={css.header}>
          <h1>Guillaume Meheut</h1>
          <nav>
            <MyLink router={router} text={t1.t('about')} href={'#about'} />
            <MyLink router={router} text={t1.t('project')} href={'#projects'} />
            <MyLink router={router} text={t1.t('contact')} href={'#contact'} />
            <Link
              href={router.asPath}
              locale={t1.t('lang').toLowerCase()}
              passHref
            >
              <a className={css.lang}>{t1.t('lang')}</a>
            </Link>
          </nav>
        </header>
      )}
    </>
  )
}

const MyLink = ({ router, text, href }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <Link href={href} passHref>
      <div
        className={css.container}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={css.containerLink}>
          <a>{text}</a>
          {router.pathname === href && (
            <motion.div layoutId="underline" className={css.underline} />
          )}
          <AnimatePresence>
            {hovered && (
              <motion.div
                layoutId="hovered"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                className={css.hovered}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </Link>
  )
}
