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
}

export const AnimatedTextBand = ({
  text,
  classname,
  isVisible,
  delay,
}: Props) => {
  return (
    <div className={[css.textContainer, classname].join(' ')}>
      {text}
      <motion.div
        className={css.band}
        style={{ originX: 1 }}
        variants={variants}
        custom={delay}
        animate={isVisible ? 'animate' : 'initial'}
      />
    </div>
  )
}
