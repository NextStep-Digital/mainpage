import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We offer tailored solutions to help traditional businesses embrace technology. 
          Start modernizing your operations and reach out to us today for a consultation.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <a href="mailto:rahul.rocket711@gmail.com">
          <Button/>
        </a>
      </div>
    </section>
  )
}

export default CTA
