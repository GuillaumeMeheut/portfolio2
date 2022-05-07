import { motion } from 'framer-motion'
import css from './type.module.scss'

const variants = {
  initial: {
    opacity: 0,
    y: 700,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      type: 'spring',
    },
  },

  exit: {
    opacity: 0,
    y: -700,
    transition: {
      duration: 0.5,
    },
  },
}

export const Type = ({ keyAnimate, type, color }) => {
  return (
    <motion.h5
      key={keyAnimate}
      variants={variants}
      initial="initial"
      animate={'animate'}
      exit="exit"
      className={css.type}
      style={{ color }}
    >
      {type}
    </motion.h5>
  )
}
