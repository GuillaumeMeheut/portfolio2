import { AppHead } from '../head'
import { Header } from '../header'
import css from './index.module.scss'

type Props = {
  children: any
  title: string
  keywords?: string
}

export const Layout = ({ children, title, keywords }: Props) => {
  return (
    <>
      <AppHead title={title} keywords={keywords} />
      <div className={css.layout}>
        <Header />
        {children}
      </div>
    </>
  )
}
