import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import css from './formulaire.module.scss'
import { motion } from 'framer-motion'

export const Formulaire = ({}) => {
  const t1 = useTranslation('contact')
  const [invalid, setInvalid] = useState(false)
  const [complete, setComplete] = useState(false)
  const [step, setStep] = useState(0)

  const verifyName = (value) => {
    if (value.length >= 2 && step === 0) {
      setStep(step + 1)
    }
    console.log(value)
  }

  return (
    <div className={css.container}>
      <p onClick={() => setInvalid(!invalid)}>Make invalid</p>
      <p onClick={() => setComplete(!complete)}>Make complete</p>
      <Input
        label={t1.t('labelName')}
        placeholder={'John Doe'}
        number={'1'}
        value={''}
        invalid={invalid}
        onChange={(e) => {
          verifyName(e.target.value)
        }}
      />
      {step > 1 && (
        <Input
          label={t1.t('labelMail')}
          placeholder={'example@gmail.com'}
          number={'2'}
          value={''}
          complete={complete}
        />
      )}
      {step > 2 && (
        <Input
          label={t1.t('labelMessage')}
          placeholder={t1.t('placeholderMessage')}
          number={'2'}
          value={''}
          complete={complete}
        />
      )}
    </div>
  )
}

type InputProps = {
  label: string
  placeholder: string
  number: string
  value: string
  onChange: (e: any) => any
}

const Input = ({
  label,
  placeholder,
  number,
  value,
  invalid,
  complete,
  onChange,
}: InputProps) => {
  return (
    <div className={css.inputContainer}>
      <label htmlFor="name">{label}</label>
      <div className={css.numberInputContainer}>
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
        </div>
        <input type="text" placeholder={placeholder} onChange={onChange} />
      </div>
    </div>
  )
}
