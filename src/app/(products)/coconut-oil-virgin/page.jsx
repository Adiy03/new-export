import React from 'react'
import styles from '../products.module.css'
import Image from 'next/image'
import { info } from '@/lib/info';

export const metadata = {
  title: "Virgin Coconut Oil (VCO) - Indonesia Wholesale",
};

const Product = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.kiri}>
          <div className={styles.atas}>
            <Image
              className={styles.img}
              src="/coconut/vcojar.png"
              width={500}
              height={500}
              alt="bulk buy virgin coconut oil Indonesia wholesale"
            />
          </div>
          <div className={styles.bawah}>
            <ul>
              <div className={styles.title2}>Virgin Coconut Oil</div>
              <li>HS Code : 15131910</li>
              <li>MOQ     : 20 FT Container</li>
              <li>Incoterm : FOB</li>
              <li>Port: Surabaya</li>
              <li>Payment : To be discussed</li>
              <li>Packaging : In Description</li>
            </ul>
            {/* <button className={styles.penawaran}>penawaran</button> */}
          </div>
        </div>
        <div className={styles.kanan}>
          <h1 className={styles.title}>Bulk Buy Virgin Coconut Oil - {info.compname}</h1>
          <div className={styles.desc}>
            <h2 className={styles.title}>
              Virgin Coconut Oil
            </h2>
            <h3 className={styles.title}>HS Code: 15131910 <br />
              Fractions of unrefined coconut oil</h3>

            Virgin coconut oil (VCO) is an unrefined oil extracted from fresh coconut milk or meat. It is known for its unique flavor, pleasant aroma, and numerous health benefits, which are primarily attributed to its high content of medium-chain fatty acids <br /><br />

            <h2 className={styles.title}>
              Virgin Coconut Oil (VCO) Uses :
            </h2>
            <b>Cooking:</b> VCO has a high smoke point, making it suitable for cooking and baking <br />
            <b>Cosmetic:</b> Used in natural skincare and haircare products for its moisturizing and healing properties <br />
            <b>Dietary Supplement:</b> Consumed directly or added to foods for its potential health benefits <br /><br />

            <h2 className={styles.title}>
              Virgin Coconut Oil (VCO) Specifications:
            </h2>
            <ul className={styles.ul}>
              <li>Appearance & Colour: Transparent, liquid above melting point at 24 C. White to ivory when solidified</li>
              <li>Flavour & Taste: Mild pleasent coconut taste & flavour</li>
              <li>Total Fat: 99,3 % (solidifies under 24 C)</li>
              <li>Cholesterol: 0%</li>
              <li>Transfat: 0%</li>
              <li>Lauric Acid: 0.1 g max / 100 g</li>
              <li>Sugar: 0,1 g max / 100 g</li>
              <li>Moisture: 0,1 % max</li>
              <li>Iodine Value: 6 - 11</li>
              <li>Packaging - Retail: Glass jars 220 / 620 / 950 ml</li>
              <li>Packaging - Bulk: @10 liter pale, @200 liter drum, @920 kg IBC tout</li>
            </ul>

            <br />

            <h2 className={styles.title}>Difference between VCO and coconut oil</h2>

            Virgin coconut oil is less processed, retaining more of the natural nutrients, flavor, and aroma of the coconut, making it suitable for health-conscious consumers and natural beauty applications <br /><br />

            Regular coconut oil, with its higher smoke point and neutral taste, is better suited for high-heat cooking and industrial food production <br />

            <div className={styles.split}>
              <div className={styles.split_kiri}>
                <h3 className={styles.title}>
                  Virgin Coconut Oil
                </h3>
                <ul className={styles.ul}>
                  <li>Cold-Pressed: Extracted from fresh coconut meat or milk using mechanical processes without heat or chemicals, preserving its natural nutrients</li><br />
                  <li>    Retains most of its natural nutrients, including medium-chain fatty acids</li><br />
                  <li>Higher in bioactive compounds due to minimal processing.</li><br />
                  <li>Has a distinct coconut flavor and aroma due to minimal processing</li>
                </ul>
              </div>
              <div className={styles.split_kanan}>
                <h3 className={styles.title}>
                  Coconut Oil (Refined)
                </h3>
                <ul className={styles.ul}>
                  <li>Refined: Processed using high heat and often chemicals to extract the oil, which is then refined, bleached, and deodorized to remove impurities</li><br />
                  <li>Some nutrients and antioxidants are lost during the refining process</li><br />
                  <li>Contains fewer bioactive compounds compared to VCO</li><br />
                  <li>Neutral in taste and smell, as the refining process removes the characteristic coconut flavor and aroma</li>
                </ul>
              </div>
            </div>

            <br /><br />

            <h2 className={styles.title}>Bulk Buy Virgin coconut oil Indonesia wholesale trade</h2>

            Indonesia is one of the worlds largest producers of coconuts, with extensive plantations spread across various islands. This ensures a steady and ample supply of fresh coconuts, crucial for producing high-quality VCO <br /><br />

            The countryapos;s diverse climate and soil conditions allow for the cultivation of various coconut varieties, which can be selected for specific oil qualities and characteristics <br /><br />

            Many Indonesian producers use traditional cold-press methods to extract VCO, which helps retain the oilapos;s natural nutrients, flavor, and aroma <br /><br />

            A significant portion of VCO in Indonesia is produced organically, adhering to strict quality control measures to ensure the purity and natural essence of the oil
          </div>
        </div>
      </div>
    </>
  )
}

export default Product