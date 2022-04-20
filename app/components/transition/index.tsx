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
    opacity: 0,
  },
}

export const Transition = ({ Key }) => {
  return (
    <AnimatePresence>
      <motion.div
        className={css.transition}
        key={Key}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.5,
        }}
      />
    </AnimatePresence>
  )
}
