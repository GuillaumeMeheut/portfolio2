import { useRef } from 'react'
import Background from '../background'
import { AppHead } from '../head'
import { Header } from './header'
import css from './index.module.scss'
import InProgress from '../inProgress'

type Props = {
  children: any
  title: string
  keywords?: string
  bg?: boolean
}

export const Layout = ({ children, title, keywords, bg = false }: Props) => {
  const ref = useRef(null)
  return (
    <>
      <AppHead title={title} keywords={keywords} />
      <div ref={ref} className={css.layout}>
        <Header />
        {children}
        {bg && <Background ref={ref} />}
        <InProgress />
      </div>
    </>
  )
}
