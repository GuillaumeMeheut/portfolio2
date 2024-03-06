import { useTranslation } from 'next-i18next'
import css from './index.module.scss'
import { Description } from './description'
import { AnimatedText } from 'app/components/animatedText'
import { AppImage } from 'app/components/image'
import ForstaLogo from '../../../public/assets/Forsta_Symbol_RGB_Navy.webp'

export const About = ({}) => {
  const t1 = useTranslation('about')

  return (
    <section id="about" className={css.section}>
      <AnimatedText text={t1.t('titlePage')} />

      <Description />

      <footer className={css.workingAt}>
        <p dangerouslySetInnerHTML={{ __html: t1.t('workingAt') }} />
        <AppImage src={ForstaLogo} alt="Forsta logo" className={css.logo} />
      </footer>
    </section>
  )
}
