import { useEffect, useRef, useState } from 'react'
import css from './index.module.scss'
import { Number } from './number'
import Projects from 'public/data/projects.json'
import React from 'react'
import { Title } from './title'
import { Type } from './type'
import { Img } from './img'
import { AnimatePresence, motion } from 'framer-motion'

export const Project = ({ changeColor }) => {
  const ref = useRef(null)

  const [wheeling, setWheeling] = useState<number>(0)
  const [scrollDown, setScrollDown] = useState<boolean>(true)
  const [index, setIndex] = useState<number>(1)
  const [animating, setAnimating] = useState<boolean>(false)

  useEffect(() => {
    if (ref) {
      const section = ref.current
      section.addEventListener('wheel', onWheeling, { passive: true })
      return () =>
        section.removeEventListener('wheel', onWheeling, { passive: true })
    }
  }, [ref, wheeling, animating])

  useEffect(() => {
    onChangeIndex()
  }, [index])

  const onWheeling = (e) => {
    const newWheeling = wheeling + e.deltaY

    if (newWheeling < 0 || newWheeling > (Projects.length + 1) * 1000) return

    if (wheeling % 1000 > index * 1000) setIndex(index + 1)
    else if (wheeling % 1000 < index * 1000) {
      // setIndex(index - 1)
      console.log('proc')
    }
    setWheeling(newWheeling)
  }

  const onChangeIndex = () => {
    // changeColor(Projects[index - 1].colorBg)
    setAnimating(true)
    setTimeout(() => {
      setAnimating(false)
    }, 1000)
  }

  console.log(index)

  return (
    <section ref={ref} className={css.section}>
      {Projects.map((project, i) => {
        return (
          <AnimatePresence key={project.id} exitBeforeEnter>
            {i === index - 1 && (
              <>
                <Title
                  keyAnimate={'title' + index}
                  title={project.title}
                  color={project.colorText}
                />
                <Type
                  keyAnimate={'type' + index}
                  type={project.type}
                  color={project.colorText}
                />
                <Number
                  keyAnimate={'number' + index}
                  value={project.id}
                  wheeling={wheeling}
                  color={project.colorText}
                />
                <Img
                  imgSrc={project.imgPreview}
                  alt={project.title}
                  keyAnimate={'img' + index}
                />

                <Progress
                  wheeling={wheeling}
                  nbProjects={Projects.length}
                  color={project.colorText}
                />
              </>
            )}
          </AnimatePresence>
        )
      })}
    </section>
  )
}

const Progress = ({ wheeling, nbProjects, color }) => {
  return (
    <div
      className={css.progress}
      style={{
        transform: `scaleX(${(1 / 1000 / nbProjects) * wheeling})`,
        background: color,
      }}
    />
  )
}
