import { useTranslation } from 'next-i18next'
import css from './index.module.scss'

export const Informations = ({}) => {
  const t1 = useTranslation('contact')

  return (
    <div className={css.container}>
      <h6>{t1.t('infos')}</h6>
      <p>{t1.t('mail')}</p>
      <p>{t1.t('tel')}</p>
      <p>{t1.t('location')}</p>
      <h6>{t1.t('socials')}</h6>
      <p>{t1.t('github')}</p>
      <p>{t1.t('linkedin')}</p>
    </div>
  )
}
