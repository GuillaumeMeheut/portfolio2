import { useRef } from 'react'
import Background from '../background'
import { AppHead } from '../head'
import { Header } from './header'
import css from './index.module.scss'

type Props = {
  children: any
  title: string
  keywords?: string
}

export const Layout = ({ children, title, keywords }: Props) => {
  const ref = useRef(null)
  return (
    <>
      <AppHead title={title} keywords={keywords} />
      <div ref={ref} className={css.layout}>
        <Header />
        {children}
        <Background ref={ref} />
      </div>
    </>
  )
}
