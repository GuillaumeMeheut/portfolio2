import { useTranslation } from 'next-i18next'
import css from './index.module.scss'
import { AppImage } from '../image'
import Danger from 'public/assets/danger.svg'

const InProgress = () => {
  const t1 = useTranslation('common')
  return (
    <div className={css.container}>
      <AppImage src={Danger} alt={'danger'} className={css.img} />
      <p>{t1.t('inProgress')}</p>
    </div>
  )
}

export default InProgress
