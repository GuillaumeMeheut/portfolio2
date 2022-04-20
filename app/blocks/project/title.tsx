import { AnimatePresence, motion } from 'framer-motion'
import css from './title.module.scss'

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

export const Title = ({ keyAnimate, title, wheeling }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.h4
        key={keyAnimate}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.5,
        }}
        className={css.title}
      >
        {title}
      </motion.h4>
    </AnimatePresence>
  )
}
