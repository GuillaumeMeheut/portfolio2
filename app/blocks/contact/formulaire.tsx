import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import css from './formulaire.module.scss'
import { Informations } from './informations'

export const Formulaire = ({}) => {
  const t1 = useTranslation('contact')
  const [invalid, setInvalid] = useState(false)
  const [complete, setComplete] = useState(false)

  return (
    <div className={css.container}>
      <p onClick={() => setInvalid(!invalid)}>Make invalid</p>
      <p onClick={() => setComplete(!complete)}>Make complete</p>
      <Input
        label={t1.t('labelName')}
        placeholder={'John Doe'}
        number={'01'}
        value={''}
        invalid={invalid}
      />
      <Input
        label={t1.t('labelMail')}
        placeholder={'example@gmail.com'}
        number={'02'}
        value={''}
        complete={complete}
      />
    </div>
  )
}

type InputProps = {
  label: string
  placeholder: string
  number: string
  value: string
}

const Input = ({
  label,
  placeholder,
  number,
  value,
  invalid,
  complete,
}: InputProps) => {
  return (
    <div className={css.inputContainer}>
      <label htmlFor="name">{label}</label>
      <div className={css.numberContainer}>
        <p>{number}</p>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={
              invalid ? css.circleError : complete ? css.circleComplete : ''
            }
            cx="6"
            cy="6"
            r="6"
          />
        </svg>
        <input type="text" value={value} placeholder={placeholder} />
      </div>
    </div>
  )
}
