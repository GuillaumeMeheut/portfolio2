import { motion } from 'framer-motion'
import { useState } from 'react'
import css from './index.module.scss'

const variants = {
  initial: {
    scaleX: 1,
  },
  animate: (delay) => ({
    scaleX: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.4,
      delay,
    },
  }),
}

type Props = {
  text: string
  classname?: string
  isVisible: boolean
  delay: number
  backgroundColor?: string
}

export const AnimatedTextBand = ({
  text,
  classname,
  isVisible,
  delay,
  backgroundColor = 'black',
}: Props) => {
  return (
    <div className={[css.textContainer, classname].join(' ')}>
      {text}
      <motion.div
        className={css.band}
        style={{ originX: 1, backgroundColor }}
        variants={variants}
        custom={delay}
        animate={isVisible ? 'animate' : 'initial'}
      />
    </div>
  )
}
