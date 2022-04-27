import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import React from 'react'
import css from './informations.module.scss'

const variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
}

export const Informations = ({}) => {
  const t1 = useTranslation('contact')

  const informations = [
    {
      title: t1.t('infos'),
      infos: [
        { text: t1.t('mail') },
        { text: t1.t('tel') },
        { text: t1.t('location') },
      ],
    },
    {
      title: t1.t('socials'),
      infos: [
        { text: t1.t('github'), href: 'https://github.com/GuillaumeMeheut' },
        {
          text: t1.t('linkedin'),
          href: 'https://www.linkedin.com/in/guillaume-meheut-836b66199/',
        },
      ],
    },
  ]

  return (
    <motion.div
      className={css.container}
      transition={{ staggerChildren: 0.2, delayChildren: 1.5 }}
    >
      {informations.map((info, index) => {
        return (
          <React.Fragment key={index}>
            <motion.h6 variants={variants} initial="initial" animate="animate">
              {info.title}
            </motion.h6>
            {info.infos.map((el) => {
              return (
                <>
                  {el.href ? (
                    <motion.a
                      key={el}
                      href={el.href}
                      target={'_blank'}
                      variants={variants}
                      initial="initial"
                      animate="animate"
                    >
                      {el.text}
                    </motion.a>
                  ) : (
                    <motion.p
                      key={el}
                      variants={variants}
                      initial="initial"
                      animate="animate"
                    >
                      {el.text}
                    </motion.p>
                  )}
                </>
              )
            })}
          </React.Fragment>
        )
      })}
    </motion.div>
  )
}
