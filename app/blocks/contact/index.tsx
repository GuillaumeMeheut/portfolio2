import { AnimatedText } from 'app/components/animatedText'
import { useTranslation } from 'next-i18next'
import { Earth } from './earth'
import { Formulaire } from './formulaire'
import css from './index.module.scss'
import { Informations } from './informations'

export const Contact = ({}) => {
  const t1 = useTranslation('contact')

  return (
    <section className={css.section}>
      <div className={css.wrap}>
        <div className={css.containerText}>
          <AnimatedText text={t1.t('titlePage1')} />
          <AnimatedText text={t1.t('titlePage2')} />
        </div>
        <Earth />
      </div>
      <div className={css.wrap}>
        <Formulaire />
        <Informations />
      </div>
    </section>
  )
}
