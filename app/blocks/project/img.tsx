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
      duration: 0.4,
    },
  },
}

export const Img = ({ imgSrc, alt, keyAnimate, wheeling, animating }) => {
  return (
    <motion.img
      className={css.img}
      src={imgSrc}
      alt={alt}
      key={keyAnimate}
      variants={variants}
      initial="initial"
      animate={animating ? 'animate' : 'parallax'}
      exit="exit"
      custom={wheeling}
    />
  )
}
