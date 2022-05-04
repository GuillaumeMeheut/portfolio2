import { useState } from 'react'
import css from './index.module.scss'

export const InBuild = () => {
  const [open, setOpen] = useState(true)
  return (
    <>
      {open && (
        <div className={css.container}>
          <div className={css.contentContainer}>
            <p>This Website is currently in build...</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
          <div className={css.blackFilter} />
        </div>
      )}
    </>
  )
}
