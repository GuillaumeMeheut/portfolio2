import { useThree, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import interpolateColor from 'color-interpolate'

const DEFAULT_COLOR = '#9C3AFF'

export const PointLightMouse = () => {
  const { viewport, size } = useThree()
  const light = useRef(null)

  const cursor = useRef({ x: 0, y: 0, lastYpos: 0 })
  const color = useRef(DEFAULT_COLOR)

  useEffect(() => {
    const colors = [DEFAULT_COLOR, '#493AFF', '#3AC4FF']

    const interpolate = interpolateColor(colors)

    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const scrollPercentage = Math.min(scrollPosition / maxScroll, 1)
      const newColor = interpolate(scrollPercentage)
      color.current = newColor
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useFrame(() => {
    const x = cursor.current.x
    const y = cursor.current.y
    const lightColor = color.current

    if (light.current) {
      light.current.position.set(x, y, 0.05)
      light.current.color.set(lightColor)
    }
  })

  const onMove = (e) => {
    const pixelRatio = viewport.width / size.width
    cursor.current.x = (e.pageX - size.width * 0.5) * pixelRatio
    cursor.current.y = (e.pageY - size.height * 0.5) * pixelRatio * -1

    cursor.current.lastYpos = e.clientY
  }

  const onScroll = () => {
    const pixelRatio = viewport.width / size.width

    cursor.current.y =
      (window.scrollY + cursor.current.lastYpos - size.height * 0.5) *
      pixelRatio *
      -1
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return <pointLight ref={light} intensity={1.5} />
}
