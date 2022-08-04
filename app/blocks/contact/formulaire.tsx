import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import css from './formulaire.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimMsg } from './animMsg'

export const Formulaire = ({}) => {
  const t1 = useTranslation('contact')
  const [step, setStep] = useState<number>(1)
  const [name, setName] = useState({ value: '', error: '', valid: false })
  const [mail, setMail] = useState({ value: '', error: '', valid: false })
  const [message, setMessage] = useState({ value: '', error: '', valid: false })
  const [send, setSend] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const verifyName = (value) => {
    const newName = { ...name }
    newName.value = value
    if (!value) {
      newName.valid = false
      newName.error = t1.t('errorEmpty')
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
      newMail.error = t1.t('errorEmpty')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      newMail.valid = false
      newMail.error = t1.t('errorEmailInvalid')
    } else {
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
      newMessage.error = t1.t('errorEmpty')
    } else if (value.length < 30) {
      newMessage.valid = false
      newMessage.error = t1.t('errorMessage')
    } else {
      newMessage.valid = true
      newMessage.error = ''
      if (step === 3) setStep(step + 1)
    }
    setMessage(newMessage)
  }

  const sendMail = async (e) => {
    e.preventDefault()
    verifyName(name.value)
    verifyMail(mail.value)
    verifyMessage(message.value)
    if (name.valid && mail.valid && message.valid) {
      try {
        setLoading(true)
        const res = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify({
            name: name.value,
            email: mail.value,
            message: message.value,
          }),
        })
        if (res.status === 200) {
          setSend(true)
          setTimeout(() => {
            setSend(false)
            emptyFields()
          }, 1300)
        }
        setLoading(false)
      } catch (e) {
        console.log(e)
      }
    }
  }

  const emptyFields = () => {
    setName({ value: '', error: '', valid: false })
    setMail({ value: '', error: '', valid: false })
    setMessage({ value: '', error: '', valid: false })
    setStep(1)
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
        t1={t1}
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
            console.log('test')
          }}
          t1={t1}
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
          t1={t1}
        />
      )}
      {step > 3 && (
        <>
          <button type="submit" className={css.button} disabled={loading}>
            Send
          </button>
          <AnimatePresence>{send && <AnimMsg />}</AnimatePresence>
        </>
      )}
    </form>
  )
}

const variantsError = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
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
  t1: any
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
  t1,
  onChange,
}: InputProps) => {
  const returnClassnameCircle = (): string => {
    if (value.length === 0) return ''
    else if (!valid) return css.circleError
    return css.circleComplete
  }
  const returnClassnameInput = (): string => {
    if (value.length === 0) return ''
    else if (!valid) return css.error
    return css.complete
  }
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
            <circle className={returnClassnameCircle()} cx="6" cy="6" r="6" />
          </svg>
        </div>
        {text ? (
          <textarea
            name={id}
            id={id}
            className={returnClassnameInput()}
            placeholder={placeholder}
            onChange={onChange}
            cols={30}
            rows={10}
          />
        ) : (
          <input
            id={id}
            className={returnClassnameInput()}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
          />
        )}
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.span
          key={id + error}
          className={css.errorMessage}
          variants={variantsError}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          transition={{ ease: 'easeInOut' }}
        >
          {error}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  )
}
