import css from './index.module.scss'
import NoSSR from '../../components/no-ssr'
import { Canvas } from '@react-three/fiber'
import { forwardRef, useRef } from 'react'
import { PointLightMouse } from './pointLightMouse'

const Background = forwardRef((props, ref: any) => {
  const canvas = useRef(null)

  return (
    <NoSSR>
      <div className={css.canvasContainer}>
        <Canvas
          ref={canvas}
          onCreated={({ events }) => events.connect(ref.current)}
        >
          <PointLightMouse />

          <mesh scale={[15, 10, 1]}>
            <planeBufferGeometry />
            <meshPhongMaterial />
          </mesh>
        </Canvas>
      </div>
    </NoSSR>
  )
})

export default Background
