import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import css from './footer.module.scss'

export const ProjectFooter = () => {
  const router = useRouter()
  const t1 = useTranslation('projects')

  return (
    <footer className={css.footer}>
      <Link href={'/#projects'} passHref>
        <a>See other projects</a>
      </Link>
    </footer>
  )
}
