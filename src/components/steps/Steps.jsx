import React from 'react'
import styles from './steps.module.css'
import Image from 'next/image'

const Steps = () => {
  return (
    <div className={styles.container}>
      <div className={styles.kiri}>
        <span className={styles.span}>3</span> Easy Step
      </div>
      <div className={styles.kanan}>
        <div className={styles.box}>Find Product</div>
        <div className={styles.box}>Select Product</div>
        <div className={styles.box}>Send Inquiry</div>
      </div>
      <div className={styles.akhir}></div>
    </div>
  )
}

export default Steps