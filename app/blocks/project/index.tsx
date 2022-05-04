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
  const [index, setIndex] = useState<number>(0)
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
    if (
      newWheeling >= 0 &&
      newWheeling < Projects.length * 1000 &&
      !animating
    ) {
      const newIndex = Math.floor(wheeling / 1000)
      if (newIndex !== index) {
        setIndex(newIndex)
        return
      }
      setWheeling(newWheeling)
    }
  }
  const onChangeIndex = () => {
    changeColor(Projects[index].colorBg)
    if (index !== 0) {
      const roundedWheeling = Math.round(wheeling / 1001) * 1000 + 1
      console.log(roundedWheeling)

      setWheeling(roundedWheeling)
      setAnimating(true)
      setTimeout(() => {
        setAnimating(false)
      }, 2000)
    }
  }

  return (
    <section ref={ref} className={css.section}>
      {Projects.map((project, i) => {
        return (
          <AnimatePresence key={project.id} exitBeforeEnter>
            {i === index && (
              <>
                <Title
                  keyAnimate={'title' + index}
                  title={project.title}
                  wheeling={wheeling}
                  color={project.colorText}
                />
                <Type
                  keyAnimate={'type' + index}
                  type={project.type}
                  wheeling={wheeling}
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
                  wheeling={wheeling}
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
