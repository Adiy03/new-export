import React from 'react'
import styles from '../products.module.css'
import Image from 'next/image'
import { info } from '@/lib/info';

export const metadata = {
  title: " Organic Coconut Sugar | Indonesia Wholesale",
};

const Product = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.kiri}>
          <div className={styles.atas}>
            <Image
              className={styles.img}
              src="/coconut/cosu1.png"
              width={500}
              height={500}
              alt="bulk buy Organic coconut sugar Indonesia wholesale"
            />
          </div>
          <div className={styles.bawah}>
            <ul>
              <div className={styles.title2}> Organic Coconut Sugar</div>
              <li>HS Code : 17019990</li>
              <li>MOQ     : 20 FT Container</li>
              <li>Incoterm : FOB</li>
              <li>Payment : To be discussed</li>
              <li>Packaging : @25 kg, ( Inside : Transparent Plastic ), ( Outside : Paperbag (49 x 85 cm) )</li>
            </ul>
          </div>
        </div>
        <div className={styles.kanan}>
          <h1 className={styles.title}>Organic Coconut Sugar Bulk Buy</h1>
          <div className={styles.desc}>
            <h2 className={styles.title}>
              Organic Coconut Sugar
            </h2>
            <h3 className={styles.title}>HS Code: 17019990 <br />
              Cane or beet sugar and chemically pure sucrose, in solid form.</h3>

            Organic coconut sugar is a natural sweetener derived from the sap of the flower buds of the coconut palm tree (Cocos nucifera). Unlike refined sugars, it undergoes minimal processing and does not contain additives or artificial ingredients <br /><br />

            To produce coconut sugar, the sap is collected, boiled, and dehydrated until it forms granules or crystals. Being organic means that it is produced following organic farming practices without synthetic pesticides, herbicides, or fertilizers
            <br /><br />

            <h2 className={styles.title}>
              Coconut Flour Specifications:
            </h2>
            <Image
              src="/coconut/cosu1.png"
              width={250}
              height={150}
              alt="Bulk buy coconut flour Indonesia wholesale"
              className={styles.imgFloat}
            />
            <ul className={styles.ul}>
              <li>Color: Golden Brown</li>
              <li>Grade: Premium </li>
              <li>Moisture: 2% max</li>
              <li>Certificare: EU, USDA-NOP , Halal, Kosher, HACCP</li>
              <li>Packaging : @25 kg, ( Inside : Transparent Plastic ), ( Outside : Paperbag (49 x 85 cm) )</li>
            </ul>

            <br />

            <h2 className={styles.title}>
              Golden Coconut Sugar
            </h2>
            <Image
              src="/coconut/cosugold.jpeg"
              width={250}
              height={150}
              alt="Bulk buy golden coconut flour Indonesia wholesale"
              className={styles.imgFloat}
            />

            Golden Coconut Sugar is one of the superior products of CV Bonafide Anugerah Sentosa because this type of sugar is very rare in the world market. It has a lighter color than ordinary coconut sugar. However, the nutritional content is the same as ordinary coconut sugar <br /><br />
            
            The golden yellow color is the natural color of the finest processing of coconut sap. Heating and processing coconut sap with the special method that we use, can produce Golden Coconut Sugar with an excellent taste and color quality  <br /><br />
            
            We do not use chemical dyes and preservatives during the production process. The production of Golden Coconut Sugar refers to a food safety management system.
            <br />

            <br />

            <h2 className={styles.title}>
              Organic Coconut Sugar Uses :
            </h2>
            <div className={styles.split}>
              <div className={styles.split_kiri}>
                It is commonly added to coffee, tea, smoothies, and other drinks as a natural sweetener
                <br /><br />

                Coconut sugar enhances the flavor of desserts such as puddings, custards, and ice creams
                <br /><br />
              </div>
              <div className={styles.split_kanan}>
                It is used in various Asian cuisines to add a subtle sweetness to savory dishes like curries and stir-fries
                <br /><br />

                Coconut sugar can be found in condiments like ketchup and barbecue sauce as a healthier alternative to high-fructose
                <br /><br />
              </div>
            </div>

            <h2 className={styles.title}>
              Organic coconut sugar Benefits :
            </h2>
            Coconut sugar has a lower glycemic index (GI) than regular sugar, which means it causes a slower rise in blood glucose levels. This can be beneficial for people managing blood sugar levels.
            <br />

            <div className={styles.split}>
              <div className={styles.split_kiri}>
                Coconut sugar retains some nutrients from the sap, including small amounts of iron, zinc, calcium, potassium, and antioxidants.
                <br /><br />

                It is less processed than white sugar, preserving more of its natural vitamins and minerals
                <br /><br />
              </div>
              <div className={styles.split_kanan}>
                Being a natural sweetener, it does not contain artificial chemicals or preservatives, making it a cleaner option for those seeking organic and natural food products.
                <br /><br />

                Coconut sugar has a distinct caramel-like flavor that can enhance the taste of various foods and beverages <br /><br />
              </div>
            </div>

            <br />

            <h2 className={styles.title}>Bulk Buy organic Coconut sugar Indonesia wholesale trade</h2>

            Indonesia has a long history of coconut cultivation, and many farms employ sustainable and environmentally friendly practices. This includes using organic fertilizers and natural pest control methods, which help maintain soil health and biodiversity <br /><br />

            The unique climatic conditions and soil quality in Indonesia contribute to a distinct, rich caramel-like flavor of the coconut sugar, which is often considered superior to that produced in other regions <br /><br />

            Indonesia has vast coconut plantations, ensuring a steady and abundant supply of coconut sap for sugar production. This helps meet global demand and provides a reliable source for international markets <br /><br />

            Indonesian organic coconut sugar often comes with various certifications such as USDA Organic, EU Organic, and Fair Trade, providing assurance of quality and adherence to international standards
          </div>
        </div>
      </div>
    </>
  )
}

export default Product