import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Simplify your online tools <br className='sm:block hidden'/>in just a few steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our streamlined solutions make it easy to modernize your business. 
          Whether it’s building a website, setting up online tools, or customizing software, 
          we ensure everything works seamlessly for your needs.
        </p>
        <a href="mailto:rahul.rocket711@gmail.com">
          <Button styles='mt-10'/>
        </a>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='business-tools'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
