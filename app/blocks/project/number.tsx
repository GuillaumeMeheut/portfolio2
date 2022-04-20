import { AnimatePresence, motion } from 'framer-motion'
import css from './number.module.scss'

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

export const Number = ({ keyAnimate, value, wheeling }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.svg
        key={keyAnimate}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.5,
        }}
        viewBox="0 0 321 222"
        className={css.svgNumber}
      >
        <text className={css.filledText} y="200">
          {value}
        </text>
        <mask id="mask">
          <rect
            style={{
              transform: `scaleY(${(((200 / 1000) * wheeling) % 200) / 200})`,
            }}
          />
        </mask>
        <text mask="url(#mask)" y="200">
          {value}
        </text>
      </motion.svg>
    </AnimatePresence>
  )
}
