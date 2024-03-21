import css from './index.module.scss'
import Image, { StaticImageData } from 'next/image'

declare type ImgElementStyle = NonNullable<
  JSX.IntrinsicElements['img']['style']
>

type Props = {
  src: string | StaticImageData
  alt: string
  widthImg?: number
  heightImg?: number
  priority?: boolean
  objectPos?: string
  className?: string
  objectFit?: ImgElementStyle['objectFit']
  rest?: any
}

export const AppImage = ({
  src,
  alt,
  widthImg,
  heightImg,
  priority,
  objectPos,
  className,
  objectFit = 'cover',
  rest,
}: Props) => {
  return (
    <div className={[css.imgContainer, className].join(' ')} {...rest}>
      <Image
        src={src}
        alt={alt}
        width={widthImg}
        height={heightImg}
        layout="responsive"
        priority={priority}
        objectFit={objectFit}
        objectPosition={objectPos}
      />
    </div>
  )
}
