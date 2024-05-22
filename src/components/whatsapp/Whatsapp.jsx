"use client"

import Link from "next/link"
import React from "react"
import styles from "./whatsapp.module.css"
import Image from "next/image"


const Whatsapp = () => {
  return (
    <div className={styles.whatsapp}>
     <Link href="https://wa.me/6285155032886?text=Hi EasyExportID, I want to make some Inquiry!" target="_blank" id="toggle1" className={styles.wtsapp}>
      <Image
        src="/wa.webp"
        width={50}
        height={50}
        alt="Picture of the author"
      />
    </Link>
    </div>
  )
}

export default Whatsapp