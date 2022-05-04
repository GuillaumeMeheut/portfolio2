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
  exit: {
    opacity: 0,
    y: -300,
    duration: 1,
  },
}

export const Title = ({ keyAnimate, title, wheeling, color }) => {
  return (
    <motion.h4
      key={keyAnimate}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={css.title}
      style={{ color }}
    >
      {title}
    </motion.h4>
  )
}
