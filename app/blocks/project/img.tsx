import { motion } from 'framer-motion'
import css from './img.module.scss'

const variants = {
  initial: {
    opacity: 0,
    y: 1000,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.8,
      type: 'spring',
    },
  },

  exit: {
    opacity: 0,
    y: -300,
    transition: {
      duration: 0.4,
    },
  },
}

export const Img = ({ imgSrc, alt, keyAnimate }) => {
  return (
    <motion.img
      className={css.img}
      src={imgSrc}
      alt={alt}
      key={keyAnimate}
      variants={variants}
      initial="initial"
      animate={'animate'}
      exit="exit"
    />
  )
}
