import { useThree, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export const PointLightMouse = () => {
  const { viewport } = useThree()
  const light = useRef(null)

  useFrame(({ mouse, events }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    light.current.position.set(x, y, 0.05)
  })

  return <pointLight ref={light} color="red" intensity={1.6} />
}
