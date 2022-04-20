import { useEffect, useRef, useState } from 'react'
import css from './index.module.scss'
import { Number } from './number'
import Projects from 'public/data/projects.json'
import React from 'react'
import { Title } from './title'
import { Type } from './type'

export const Project = () => {
  const ref = useRef(null)

  const [wheeling, setWheeling] = useState<number>(0)
  const [scrollDown, setScrollDown] = useState<boolean>(true)
  const [index, setIndex] = useState<number>(0)
  const [animating, setAnimating] = useState<boolean>(false)

  useEffect(() => {
    if (ref) {
      const section = ref.current
      section.addEventListener('wheel', onWheeling)
      return () => section.removeEventListener('wheel', onWheeling)
    }
  }, [ref, wheeling, animating])

  useEffect(() => {
    onChangeIndex()
  }, [index])

  const onWheeling = (e) => {
    e.preventDefault()
    const newWheeling = wheeling + e.deltaY
    if (
      newWheeling >= 0 &&
      newWheeling < Projects.length * 1000 &&
      !animating
    ) {
      const index = Math.floor(wheeling / 1000)
      setIndex(index)
      setWheeling(newWheeling)
    }
  }
  const onChangeIndex = () => {
    if (index !== 0) {
      const roundedWheeling = Math.round(wheeling / 1000) * 1000
      setWheeling(roundedWheeling)
      setAnimating(true)
      setTimeout(() => {
        setAnimating(false)
      }, 2000)
    }
  }

  return (
    <section ref={ref} className={css.section}>
      <Title
        keyAnimate={'title' + index}
        title={Projects[index].title}
        wheeling={wheeling}
      />
      <Type
        keyAnimate={'type' + index}
        type={Projects[index].type}
        wheeling={wheeling}
      />
      <Number
        keyAnimate={'number' + index}
        value={Projects[index].id}
        wheeling={wheeling}
      />
      <Progress wheeling={wheeling} nbProjects={Projects.length} />
    </section>
  )
}

const Progress = ({ wheeling, nbProjects }) => {
  return (
    <div
      className={css.progress}
      style={{
        transform: `scaleX(${(1 / 1000 / nbProjects) * wheeling})`,
      }}
    />
  )
}
