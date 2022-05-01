import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useRef, useState } from 'react'
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
          <ImgText
            text={'Next.js.'}
            imgSrc={'/assets/nextjs.jpg'}
            link={'https://nextjs.org/'}
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

const ImgText = ({ text, imgSrc, link }) => {
  const _container = useRef(null)
  const _img = useRef(null)
  const [dimensions, setDimensions] = useState(null)

  useEffect(() => {
    if (_container && dimensions) {
      const container = _container.current
      container.addEventListener('mousemove', inImg)
      container.addEventListener('mouseleave', outImg)

      return () => {
        container.removeEventListener('mousemove', inImg)
        container.removeEventListener('mouseleave', outImg)
      }
    }
  }, [_container, dimensions])

  useEffect(() => {
    setDimensions({ width: _img.current.width, height: _img.current.height })
  }, [_img])

  const inImg = (e) => {
    const img = _img.current

    img.style.display = 'block'
    img.style.opacity = 1
    img.style.top = e.pageY - dimensions.height / 2 + 'px'
    img.style.left = e.pageX - dimensions.width / 2 + 'px'
  }

  const outImg = () => {
    const img = _img.current
    img.style.opacity = 0
    img.style.top = '-99999px'
    img.style.left = '-99999px'
    setTimeout(() => {
      img.style.display = 'none'
    }, 300)
  }

  return (
    <div ref={_container} className={css.containerImgText}>
      <a href={link} target="_blank">
        {text}
      </a>
      <img ref={_img} src={imgSrc} alt={text} />
    </div>
  )
}
