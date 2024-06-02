import React from 'react'
import styles from "./services.module.css"
import Image from 'next/image'

const Service = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.kiri}>
        <Image
          src="/import-export.gif"
          width={400}
          height={250}
          alt="Picture of the author"
          unoptimized
        />
        </div>
        <div className={styles.kanan}>
          <p className={styles.desc}>
          EasyExportID.site is an export company based in Indonesia, specializing in global wholesale trade
          <br /><br />

          We serve as a bridge between Indonesian manufacturers and the international market, offering easy and efficient access to a variety of flagship products from Indonesia <br /><br />
          
          With a focus on global wholesale trade, we aim to expand Indonesia&apos;s export footprint worldwide, enabling our customers to easily enjoy the diversity and quality of Indonesian products.
          </p>
        </div>
      </div>
    </>
  )
}

export default Service