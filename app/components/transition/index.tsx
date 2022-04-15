import { motion, AnimatePresence } from 'framer-motion'
import css from './index.module.scss'
const variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
  },
  exit: {
    opacity: 1,
  },
}

export const Transition = ({ Key }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={css.transition}
        key={Key}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.3,
        }}
      />
    </AnimatePresence>
  )
}
