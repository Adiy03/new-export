import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { images } from '../products/data'
import styles from './productSide.module.css'

const ProductSide = () => {
  // Sort images alphabetically by product name
  const sortedImages = images.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Other Products
      </h2>
      <div className={styles.box}>

        {sortedImages.map((product) => (
          <Link href={`/${product.urlPath}`} key={product.id} className={styles.productItem}>
            <div className={styles.boxImg}>
              <Image
                className={styles.img}
                src={product.url}
                width={500}
                height={500}
                alt={`Bulk buy ${product.name} Indonesia wholesale`}
              />
            </div>
            <div className={styles.boxDesc}>
              <h2 className={styles.product_name}>
                {product.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductSide
