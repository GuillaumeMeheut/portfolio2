import css from './index.module.scss'
import NoSSR from '../../components/no-ssr'
import { Canvas } from '@react-three/fiber'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { PointLightMouse } from './pointLightMouse'

const Background = forwardRef((props, ref: any) => {
  const canvas = useRef(null)

  const Lights = [
    { color: 'white', position: [0, 0, 5] },
    { color: 'blue', position: [0, 3, 0] },
    { color: 'red', position: [1, 2, 0] },
  ]

  return (
    <NoSSR>
      <div className={css.canvasContainer}>
        <Canvas
          ref={canvas}
          onCreated={({ events }) => events.connect(ref.current)}
        >
          <ambientLight color="black" intensity={0.3} />
          {/* {Lights.map((light) => {
            return (
              <directionalLight color={light.color} position={light.position} />
            )
          })} */}
          <PointLightMouse />

          <mesh scale={[15, 10, 1]}>
            <planeBufferGeometry />
            <meshPhongMaterial />
          </mesh>
          {/* <BufferPoints /> */}
        </Canvas>
      </div>
    </NoSSR>
  )
})

export default Background
