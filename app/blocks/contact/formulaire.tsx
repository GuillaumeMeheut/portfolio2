import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import css from './formulaire.module.scss'
import { motion } from 'framer-motion'

export const Formulaire = ({}) => {
  const t1 = useTranslation('contact')
  const [step, setStep] = useState(1)

  const verifyName = (value) => {
    if (value.length >= 2 && step === 1) {
      setStep(step + 1)
    }
  }
  const verifyEmail = (value) => {
    let error
    if (!value) error = 'Champs requis'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      error = 'Email invalide'
    else if (step === 2) {
      setStep(step + 1)
    }
  }

  console.log(step)

  return (
    <div className={css.container}>
      <Input
        id={'name'}
        label={t1.t('labelName')}
        placeholder={'John Doe'}
        number={'1'}
        value={''}
        // invalid={invalid}
        onChange={(e) => {
          verifyName(e.target.value)
        }}
      />
      {step > 1 && (
        <Input
          id={'mail'}
          label={t1.t('labelMail')}
          placeholder={'example@gmail.com'}
          number={'2'}
          value={''}
          onChange={(e) => {
            verifyEmail(e.target.value)
          }}
          // complete={complete}
        />
      )}
      {step > 2 && (
        <Input
          id={'message'}
          label={t1.t('labelMessage')}
          placeholder={t1.t('placeholderMessage')}
          number={'3'}
          value={''}
          text
          // complete={complete}
        />
      )}
    </div>
  )
}

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: 'spring', stiffness: 150 },
  },
}

type InputProps = {
  id: string
  label: string
  placeholder: string
  number: string
  value: string
  text?: boolean
  onChange: (e: any) => any
}

const Input = ({
  id,
  label,
  placeholder,
  number,
  value,
  text = false,
  invalid,
  complete,
  onChange,
}: InputProps) => {
  return (
    <motion.div
      className={css.inputContainer}
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <label htmlFor={id}>{label}</label>
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
        {text ? (
          <textarea
            name={id}
            id={id}
            placeholder={placeholder}
            cols={30}
            rows={10}
          />
        ) : (
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
          />
        )}
      </div>
    </motion.div>
  )
}
