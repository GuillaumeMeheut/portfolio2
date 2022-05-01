import { motion } from 'framer-motion'
import css from './index.module.scss'

const variants = {
  initial: {
    y: 80,
  },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.9,
      bounce: 0,
    },
  },
}

type Props = {
  text: string
}

export const AnimatedText = ({ text }: Props) => {
  const splitText = text.split('')

  return (
    <motion.h4
      className={css.animatedText}
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.04,
      }}
    >
      {splitText.map((letter, index) => {
        return letter !== ' ' ? (
          <motion.span key={index} variants={variants}>
            {letter}
          </motion.span>
        ) : (
          <motion.span key={index}>&nbsp;</motion.span>
        )
      })}
    </motion.h4>
  )
}
