import { AnimatePresence, motion } from 'framer-motion'
import css from './type.module.scss'

const variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 100,
  },
}

export const Type = ({ keyAnimate, type, wheeling }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.h5
        key={keyAnimate}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.5,
        }}
        className={css.type}
      >
        {type}
      </motion.h5>
    </AnimatePresence>
  )
}
