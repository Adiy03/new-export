import React from 'react'
import styles from '../products.module.css'
import Image from 'next/image'

const Products = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.kiri}>
          <div className={styles.atas}>
            <Image
              className={styles.img}
              src="/indo.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.bawah}>
            <ul>
              <li>Product : Yellowfin Tuna</li>
              <li>HS Code :</li>
              <li>MOQ     :</li>
              <li>Incoterm :</li>
              <li>Payment :</li>
              <li>Packaging :</li>
              <li>Spesification :</li>
            </ul>
            <button className={styles.penawaran}>penawaran</button>
          </div>
        </div>
        <div className={styles.kanan}>kanan</div>
      </div>
    </>
  )
}

export default Products