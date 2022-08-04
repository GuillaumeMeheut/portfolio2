import css from './index.module.scss'
import Image, { StaticImageData } from 'next/image'

type Props = {
  src: string | StaticImageData
  alt: string
  widthImg?: number
  heightImg?: number
  priority?: boolean
  objectPos?: string
  className?: string
}

export const AppImage = ({
  src,
  alt,
  widthImg,
  heightImg,
  priority,
  objectPos,
  className,
}: Props) => {
  return (
    <div className={(css.imgContainer, className)}>
      <Image
        src={src}
        alt={alt}
        width={widthImg}
        height={heightImg}
        layout="responsive"
        priority={priority}
        objectFit="cover"
        objectPosition={objectPos}
      />
    </div>
  )
}
