import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import css from './animMsg.module.scss'

const variants = {
  initial: {
    opacity: 0,
    scale: 3,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 3,
    transition: {
      duration: 0.3,
    },
  },
}

export const AnimMsg = ({}) => {
  const t1 = useTranslation('contact')

  return (
    <motion.div
      className={css.container}
      key="msg"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <svg
        width="229"
        height="229"
        viewBox="0 0 229 229"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          cx="114.5"
          cy="114.5"
          r="111.5"
          stroke="#F8F8F8"
          strokeWidth="6"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          d="M169.5 62C142.5 93.5 96.9999 168 96.9999 168L47 128"
          stroke="#F8F8F8"
          strokeWidth="9"
        />
      </svg>
      <motion.p
        initial={{ opacity: 0, scale: 3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.7, type: 'spring' }}
      >
        {t1.t('msgSend')}
      </motion.p>
    </motion.div>
  )
}
