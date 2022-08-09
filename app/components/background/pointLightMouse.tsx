import { useThree, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

export const PointLightMouse = () => {
  const { viewport, size } = useThree()
  const light = useRef(null)

  const cursor = useRef({ x: 0, y: 0 })

  useFrame(({ mouse }) => {
    // const x = (mouse.x * viewport.width) / 2
    // const y = (mouse.y * viewport.height) / 2
    // const x = (cursor.current.x * viewport.width) / 2
    // const y = (cursor.current.y * viewport.height) / 2
    const x = cursor.current.x
    const y = cursor.current.y
    light.current.position.set(x, y, 0.05)
  })

  function onMove(e) {
    const pixelRatio = viewport.width / size.width
    cursor.current.x = (e.pageX - size.width * 0.5) * pixelRatio
    cursor.current.y = (e.pageY - size.height * 0.5) * pixelRatio * -1
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMove)

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  })

  return <pointLight ref={light} color="blue" intensity={1.6} />
}
