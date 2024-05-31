import React from 'react'
import styles from '../products.module.css'
import Image from 'next/image'
import { info } from '@/lib/info';
import Products from '@/components/products/Products';

export const metadata = {
  title: " Coconut Flour | Indonesia Wholesale",
};

const Product = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.kiri}>
          <div className={styles.atas}>
            <Image
              className={styles.img}
              src="/coconut/coflour1.jpg"
              width={500}
              height={500}
              alt="bulk buy  coconut flour Indonesia wholesale"
            />
          </div>
          <div className={styles.bawah}>
            <ul>
              <div className={styles.title2}> Coconut Flour</div>
              <li>HS Code : 110630</li>
              <li>MOQ     : 20 FT Container</li>
              <li>Incoterm : FOB</li>
              <li>Port: Surabaya</li>
              <li>Payment : To be discussed</li>
              <li>Packaging : @10 kg carton boxes or @20-25 kg Kraft paper bags</li>
            </ul>
          </div>
        </div>
        <div className={styles.kanan}>
          <h1 className={styles.title}>Coconut Flour Bulk Buy - {info.compname}</h1>
          <div className={styles.desc}>
            <h2 className={styles.title}>
              Coconut Flour
            </h2>
            <h3 className={styles.title}>HS Code: 110630 <br />
              Flour, meal & powder of fruit & nuts, n.e.s. </h3>

            Coconut flour is a versatile and nutritious ingredient derived from dried coconut meat. It is particularly popular in gluten-free and low-carb baking due to its unique properties
            <br /><br />

            <h2 className={styles.title}>
              Coconut Flour Uses :
            </h2>
            <b>Baking:</b> Cookies, muffins, pancakes, and bread <br />
            <b>Thickening Agent:</b> Can be used to thicken soups, stews, and sauces <br />
            <b>Breading:</b> A healthier alternative for breading meats and vegetables <br />

            <br />

            <h2 className={styles.title}>
              Coconut Flour Specifications:
            </h2>
            <Image
              src="/coconut/coflour2.png"
              width={250}
              height={150}
              alt="Bulk buy coconut flour Indonesia wholesale"
              className={styles.imgFloat2}
            />
            <ul className={styles.ul}>
              <li>Appearance & Colour: Milky white (natural), light brown (roasted)</li>
              <li>Flavour & Taste: Crispy bit sweet roasted craemy taste</li>
              <li>Texture: Crispy firm</li>
              <li>Total Fat: 6-15 %</li>
              <li>Cholesterol: 0%</li>
              <li>Transfat: 0%</li>
              <li>Protein: 15-20 g / 100 g</li>
              <li>Sugars: 12-20 g / 100 g</li>
              <li>Moisture: 4,5% max</li>
              <li>Packaging: @10 kg carton boxes or @20-25 kg Kraft paper bags</li>
            </ul>

            <br />

            <h2 className={styles.title}>Bulk Buy Coconut Flour Indonesia wholesale trade</h2>

            Indonesia is one of the largest producers of coconuts globally. This ensures a steady and ample supply of raw materials for coconut flour production, potentially leading to lower production costs <br /><br />

            Indonesian coconuts are known for their quality and flavor. This quality is reflected in the coconut flour produced, which may have a richer taste compared to flour from other regions <br /><br />

            Indonesia has vast areas suitable for organic coconut cultivation. Organic coconut flour from Indonesia may appeal to health-conscious consumers looking for natural and chemical-free alternatives <br /><br />
          </div>
        </div>
        <div className={styles.products}>
          <h2 className={styles.title3}>
            Other Produts
          </h2>
          <div className={styles.seeall}>
            See All Produts
          </div>
          <div className={styles.productsList}>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Product