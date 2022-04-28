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
        <h4 dangerouslySetInnerHTML={{ __html: t1.t('titlePage') }}></h4>
        <Earth />
      </div>
      <div className={css.wrap}>
        <Formulaire />
        <Informations />
      </div>
    </section>
  )
}
