import { useThree, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

export const PointLightMouse = () => {
  const { viewport, size } = useThree()
  const light = useRef(null)

  const cursor = useRef({ x: 0, y: 0, lastYpos: 0 })

  useFrame(() => {
    const x = cursor.current.x
    const y = cursor.current.y

    light.current.position.set(x, y, 0.05)
  })

  function onMove(e) {
    const pixelRatio = viewport.width / size.width
    cursor.current.x = (e.pageX - size.width * 0.5) * pixelRatio
    cursor.current.y = (e.pageY - size.height * 0.5) * pixelRatio * -1

    cursor.current.lastYpos = e.clientY
  }
  function onScroll() {
    const pixelRatio = viewport.width / size.width

    cursor.current.y =
      (window.scrollY + cursor.current.lastYpos - size.height * 0.5) *
      pixelRatio *
      -1
  }

  useEffect(() => {
    if (light && light.current) {
      window.addEventListener('mousemove', onMove)
      window.addEventListener('scroll', onScroll)

      return () => {
        window.removeEventListener('mousemove', onMove)
        window.removeEventListener('scroll', onScroll)
      }
    }
  }, [])

  return <pointLight ref={light} color="blue" intensity={1.5} />
}
