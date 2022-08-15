import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import css from './description.module.scss'

const variantsBorder = {
  initial: {
    scaleX: 0,
    originX: 0,
  },
  animate: (delay) => {
    return {
      scaleX: 1,
      transition: { delay, ease: 'easeInOut', duration: 1 },
    }
  },
}
const variantsText = {
  initial: {
    opacity: 0,
  },
  animate: (delay) => {
    return {
      opacity: 1,
      transition: { delay, ease: 'easeInOut', duration: 0.4 },
    }
  },
}

export const Description = ({}) => {
  const t1 = useTranslation('about')

  return (
    <div className={css.container}>
      <div className={css.border}>
        <motion.div
          className={css.textContainer}
          variants={variantsText}
          initial={'initial'}
          animate={'animate'}
          custom={0.6}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: t1.t('text1'),
            }}
          />
        </motion.div>
        <motion.span
          variants={variantsBorder}
          initial={'initial'}
          animate={'animate'}
          custom={0.3}
        />
      </div>
      <div className={css.border}>
        <motion.div
          className={css.textContainer}
          variants={variantsText}
          initial={'initial'}
          animate={'animate'}
          custom={0.8}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: t1.t('text2'),
            }}
          />
        </motion.div>
        <motion.span
          variants={variantsBorder}
          initial={'initial'}
          animate={'animate'}
          custom={0.4}
        />
      </div>
      <div className={css.border}>
        <motion.div
          className={css.textContainer}
          variants={variantsText}
          initial={'initial'}
          animate={'animate'}
          custom={1}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: t1.t('text3'),
            }}
          />
        </motion.div>
        <motion.span
          variants={variantsBorder}
          initial={'initial'}
          animate={'animate'}
          custom={0.5}
        />
      </div>
    </div>
  )
}
