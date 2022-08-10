import { useMemo } from 'react'
import { BufferAttribute } from 'three'

export const BufferPoints = ({ count = 1000 }) => {
  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5)
    return new BufferAttribute(new Float32Array(p), 3)
  }, [count])

  // console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`)

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach={'attributes-position'} {...points} />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        threshold={0.1}
        color={'red'}
        sizeAttenuation={true}
      />
    </points>
  )
}
