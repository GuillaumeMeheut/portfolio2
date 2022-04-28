import css from './earth.module.scss'
import NoSSR from '../../components/no-ssr'
import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export const Earth = ({}) => {
  return (
    <NoSSR>
      <div className={css.canvas}>
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight />
          <pointLight
            color="white"
            intensity={100}
            position={[-300, -300, -300]}
          />
          <pointLight color="white" intensity={100} position={[0, 0, 0]} />
          <pointLight
            color="white"
            intensity={100}
            position={[300, 300, 300]}
          />
          <Model />
        </Canvas>
      </div>
    </NoSSR>
  )
}

export default function Model({ ...props }) {
  const group = useRef(null)
  //@ts-ignore
  const { nodes, materials } = useGLTF('/assets/earth.gltf')

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={2.7}
      rotation={[0, 0, 0.5]}
    >
      <mesh geometry={nodes.Sphere.geometry} material={materials['default']} />
    </group>
  )
}

useGLTF.preload('/assets/earth.gltf')
