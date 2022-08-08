import css from './index.module.scss'
import { ProjectProps } from 'utils/types'
import { AppImage } from 'app/components/image'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { MutableRefObject, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
  projectsData: ProjectProps[]
}

export const Projects = ({ projectsData }: Props) => {
  const t1 = useTranslation('projects')
  const _text = useRef(null)
  const _textSub = useRef(null)
  const [viewColor, setViewColor] = useState<string>('white')

  const mousingMove = (e) => {
    if (_text) {
      _text.current.style.top =
        e.pageY - _text.current.getBoundingClientRect().height / 2 + 'px'
      _text.current.style.left =
        e.pageX - _text.current.getBoundingClientRect().width / 2 + 'px'
    }
  }

  const scaleText = (
    sens: 'up' | 'middle' | 'down',
    el: MutableRefObject<any>,
  ) => {
    if (el) {
      switch (sens) {
        case 'up':
          el.current.style.transform = 'scale(1)'
          break
        case 'middle':
          el.current.style.transform = 'scale(0.8)'
          break
        case 'down':
          el.current.style.transform = 'scale(0)'
          break
        default:
          break
      }
    }
  }
  return (
    <section className={css.section}>
      <div ref={_text} className={css.title}>
        <div ref={_textSub}>
          <svg viewBox="0 0 100 100" width="100" height="100">
            <defs>
              <path
                id="circle"
                d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text fontSize="18" letterSpacing={1.1}>
              <textPath
                xlinkHref="#circle"
                fill={viewColor}
                style={{ transitionDuration: '.1s' }}
              >
                Tap to view - Tap to view -
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <ul className={css.projectContainer}>
        {projectsData.map((project, index) => {
          return (
            <motion.li
              key={project.id}
              onMouseMove={(e) => mousingMove(e)}
              onMouseLeave={() => scaleText('down', _text)}
              onMouseEnter={() => {
                setViewColor(project.viewColor)
                scaleText('up', _text)
              }}
              onTapStart={() => scaleText('middle', _textSub)}
              onTap={() => setTimeout(() => scaleText('up', _textSub), 100)}
            >
              <Link href={`/project/${project.id}`} passHref>
                <a>
                  {/* <AppImage
                    src={project.imgIntro}
                    alt={'img'}
                    priority={index === 0 ? true : false}
                    className={css.projectImg}
                  /> */}
                  <img src="/assets/doublecard0.png" alt="" />
                </a>
              </Link>
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
