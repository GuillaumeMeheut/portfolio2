import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import css from './tile.module.scss'

type PropsTile = {
  id: number
  title: string
  img: string
}

export const Tile = ({ id, title, img }: PropsTile) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/project/${id}`} passHref>
      <a>
        <motion.li
          className={
            id === 1 ? css.container : css.container + ' ' + css.noBorderTop
          }
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            layoutId="img"
            className={css.bgImg}
            animate={{ opacity: isHovered ? 1 : 0 }}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),url(${img})`,
            }}
          />
          <h5
            style={{
              padding: isHovered
                ? '2em 0 2em 1.4em'
                : '0.625em 0 0.625em 1.4em',
            }}
          >
            {title}
          </h5>
        </motion.li>
      </a>
    </Link>
  )
}
