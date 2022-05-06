import { motion } from 'framer-motion'
import css from './title.module.scss'

const variants = {
  initial: {
    opacity: 0,
    y: 1000,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'spring',
    },
  },
  parallax: (wheeling) => {
    return {
      opacity: 1,
      y: -(wheeling % 1000) / 30,
      transition: {
        duration: 0.1,
      },
    }
  },
  exit: {
    opacity: 0,
    y: -300,
    transition: {
      duration: 0.3,
    },
  },
}

export const Title = ({ keyAnimate, title, wheeling, color, animating }) => {
  console.log(`translateY(-${wheeling % 1000}px)`)

  return (
    <motion.h4
      key={keyAnimate}
      variants={variants}
      initial="initial"
      animate={animating ? 'animate' : 'parallax'}
      exit="exit"
      custom={wheeling}
      className={css.title}
      style={{
        color,
      }}
    >
      {title}
    </motion.h4>
  )
}
