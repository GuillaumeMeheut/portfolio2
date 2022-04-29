import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import React from 'react'
import css from './informations.module.scss'

const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: 'spring' },
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
      initial={'initial'}
      animate={'animate'}
      transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
    >
      {informations.map((info, index) => {
        return (
          <React.Fragment key={index}>
            <motion.h6 variants={variants}>{info.title}</motion.h6>
            {info.infos.map((el) => {
              return (
                <React.Fragment key={el.text}>
                  {el.href ? (
                    <motion.a
                      href={el.href}
                      target={'_blank'}
                      variants={variants}
                    >
                      {el.text}
                    </motion.a>
                  ) : (
                    <motion.p variants={variants}>{el.text}</motion.p>
                  )}
                </React.Fragment>
              )
            })}
          </React.Fragment>
        )
      })}
    </motion.div>
  )
}
