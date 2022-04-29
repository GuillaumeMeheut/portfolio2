import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import css from './formulaire.module.scss'
import { motion } from 'framer-motion'

export const Formulaire = ({}) => {
  const t1 = useTranslation('contact')
  const [step, setStep] = useState(1)
  const [name, setName] = useState({ value: '', error: '', valid: false })
  const [mail, setMail] = useState({ value: '', error: '', valid: false })
  const [message, setMessage] = useState({ value: '', error: '', valid: false })

  const verifyName = (value) => {
    const newName = { ...name }
    newName.value = value
    if (!value) {
      newName.valid = false
      newName.error = 'Fill this champ'
    } else {
      newName.valid = true
      newName.error = ''
      if (step === 1) setStep(step + 1)
    }
    setName(newName)
  }
  const verifyMail = (value) => {
    const newMail = { ...mail }
    newMail.value = value
    if (!value) {
      newMail.valid = false
      newMail.error = 'Fill this champ'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      newMail.valid = false
      newMail.error = 'Email invalide'
    } else if (step === 2) {
      newMail.valid = true
      newMail.error = ''
      setStep(step + 1)
    }
    setMail(newMail)
  }

  const verifyMessage = (value) => {
    const newMessage = { ...message }
    newMessage.value = value
    if (!value) {
      newMessage.valid = false
      newMessage.error = 'Fill this champ'
    } else {
      newMessage.valid = true
      newMessage.error = ''
      if (step === 3) setStep(step + 1)
    }
    setMessage(newMessage)
  }

  const sendMail = (e) => {
    e.preventDefault()
    console.log('hello')
  }

  return (
    <form className={css.container} onSubmit={(e) => sendMail(e)}>
      <Input
        id={'name'}
        label={t1.t('labelName')}
        placeholder={'John Doe'}
        number={'1'}
        value={name.value}
        valid={name.valid}
        error={name.error}
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
          value={mail.value}
          valid={mail.valid}
          error={mail.error}
          onChange={(e) => {
            verifyMail(e.target.value)
          }}
        />
      )}
      {step > 2 && (
        <Input
          text
          id={'message'}
          label={t1.t('labelMessage')}
          placeholder={t1.t('placeholderMessage')}
          number={'3'}
          value={message.value}
          valid={message.valid}
          error={message.error}
          onChange={(e) => {
            verifyMessage(e.target.value)
          }}
        />
      )}
      {step > 3 && <button type="submit">Send</button>}
    </form>
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
  valid: boolean
  error: string
  onChange: (e: any) => any
}

const Input = ({
  id,
  label,
  placeholder,
  number,
  value,
  text = false,
  valid,
  error,
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
              className={value.length > 0 ? css.circleComplete : ''}
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
            onChange={onChange}
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
      <span className={css.error}>{error}</span>
    </motion.div>
  )
}
