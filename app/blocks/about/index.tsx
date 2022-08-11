import { useTranslation } from 'next-i18next'
import css from './index.module.scss'
import { Description } from './description'
import { AnimatedText } from 'app/components/animatedText'

export const About = ({}) => {
  const t1 = useTranslation('about')

  return (
    <section id="about" className={css.section}>
      <AnimatedText text={t1.t('titlePage')} />

      <Description />

      <footer className={css.workingAt}>
        <p dangerouslySetInnerHTML={{ __html: t1.t('workingAt') }} />
        <img src="/assets/tbwa.svg" alt="TBWA logo" />
      </footer>
    </section>
  )
}
