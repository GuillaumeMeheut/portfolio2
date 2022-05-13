import css from './index.module.scss'
import NoSSR from '../../components/no-ssr'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { motion } from 'framer-motion-3d'
import { sRGBEncoding } from 'three'
import { Image } from '@react-three/drei'

type Project = {
  id: string
  title: string
  type: string
  imgPreview: string
  colorBg: string
  colorText: string
}

type Props = {
  changeColor: (color: string) => void
  projects: Project[]
}

export const Projects = ({ changeColor, projects }: Props) => {
  const ref = useRef(null)
  const [click, setClick] = useState(false)
  return (
    <section ref={ref} className={css.section}>
      <div className={css.projectContainer}>
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <h4>{project.title}</h4>
              <p>{project.type}</p>
            </div>
          )
        })}
      </div>
      <button onClick={() => setClick(!click)}>Test</button>
      {/* THREE JS */}
      <NoSSR>
        <Suspense fallback={null}>
          <div className={css.canvas}>
            <Canvas>
              <Scene click={click} />
            </Canvas>
          </div>
        </Suspense>
      </NoSSR>
    </section>
  )
}

function Scene({ click }) {
  return (
    <>
      <AppImage click={click} />
    </>
  )
}

const AppImage = ({ click }) => {
  const ref = useRef(null)
  const [isSelected, setIsSelected] = useState(false)

  useFrame((state, delta) => {
    if (isSelected) ref.current.material.scale[0] = ref.current.scale.x = 1
  })
  return (
    <motion.group
      animate={{ x: click ? 2 : 0, scaleX: click ? 8 : 2 }}
      scale={[5, 5, 0]}
      position={[0, 0, 0]}
      whileHover={{ scale: [8, 8, 0] }}
      onTap={() => console.log('tapped!')}
    >
      <Image
        ref={ref}
        url="/assets/obonto1.jpg"
        scale={[0.3, 1, 0]}
        onClick={() => setIsSelected(!isSelected)}
      />
    </motion.group>
  )
}
