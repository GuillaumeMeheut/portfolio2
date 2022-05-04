import { AnimatePresence, motion } from 'framer-motion'
import css from './number.module.scss'

const variants = {
  initial: {
    opacity: 0,
    y: 1000,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -1000,
  },
}

export const Number = ({ keyAnimate, value, wheeling, color }) => {
  return (
    <motion.svg
      key={keyAnimate}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 1,
      }}
      viewBox="0 0 321 222"
      className={css.svgNumber}
      style={{ fill: color, stroke: color }}
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
  )
}
