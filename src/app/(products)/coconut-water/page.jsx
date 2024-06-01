import React from 'react'
import styles from '../products.module.css'
import Image from 'next/image'
import { info } from '@/lib/info';
import ProductSide from '@/components/productSide/ProductSide';

export const metadata = {
  title: "Coconut Water | Indonesia Wholesale",
};

const Product = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.kiri}>
          <div className={styles.atas}>
            <Image
              className={styles.img}
              src="/coconut/cowat3.webp"
              width={500}
              height={500}
              alt="bulk desiccated coconuts"
            />
          </div>
          <div className={styles.bawah}>
            <ul>
              <div className={styles.title2}>Coconut Water</div>
              <li>HS Code : 20098920</li>
              <li>MOQ     : 20 FT Container</li>
              <li>Incoterm : FOB</li>
              <li>Port: Surabaya</li>
              <li>Payment : To be discussed</li>
              <li>Packaging : In Description</li>
            </ul>
          </div>
        </div>
        <div className={styles.kanan}>
          <h1 className={styles.title}>Coconut Water Bulk Buy </h1>
          <div className={styles.desc}>
            Coconut water, the clear liquid found inside young green coconuts, has gained popularity as a health drink due to its hydrating properties and nutritional benefits <br /><br />

            {/* Are you looking to source high-quality coconut water in bulk or wholesale for your business?

            Our coconut water is sourced from the finest young green coconuts, ensuring a naturally refreshing and nutritious beverage that your customers will love <br /><br /> */}

            Indonesia is one of the world&#39;s leading producers of coconuts, and coconut water from this region is highly sought after for its quality and taste <br /><br />

            The tropical climate and fertile soil conditions in Indonesia provide an ideal environment for coconut cultivation, resulting in a robust and thriving coconut industry <br /><br />

            Carefully extracted from fresh coconuts and heat treated only for a couple of seconds in order to retain all the inherent properties of the natural coconut water including vitamins, minerals and taste <br /><br />

            Our coconut water is ready to carry the best testing coconut water to your doorstep <br />

            <div className={styles.split}>
              <div className={styles.split_kiri}>
                <b>Freshness</b> Guaranteed: Our coconut water is harvested from young green coconuts at the peak of freshness, ensuring a pure and delicious taste
              </div>
              <div className={styles.split_kanan}>
                <b>Natural and Pure:</b> We provide 100% natural coconut water, free from artificial additives, preservatives, and added sugars.
              </div>
            </div><br />

            <h2 className={styles.title}>
              Bulk Coconut Water Sepesification
            </h2>

            <ul className={styles.ul}>
              <li>Appearance & Colour: Transparent slightly turbid no discolorations</li>
              <li>Flavour & Taste: Pure coconut water. Slightly sweet, no foreign flavour and/or taste</li>
              <li>Texture: 100% liquid</li>
              <li>Max Fat: 0.1%</li>
              <li>PH : 5.25 - 6.0</li>
              <li>Moisture: 99%</li>
            </ul>

            <div className={styles.split}>
              <div className={styles.split_kiri}>
                <h2 className={styles.title}>
                  Packaging
                </h2>
                <b>Retail:</b> 1 liter TetraPak Square stream cap <br /><br />
                <b>Bulk:</b>
                <ul className={styles.ul}>
                  <li>20 liter aseptic bag</li>
                  <li>200 liter aseptic bag in drum</li>
                  <li>240 liter aseptic bag flexbox</li>
                </ul>
              </div>
              <div className={styles.split_kanan}>
                <h2 className={styles.title}>
                  Shipment
                </h2>
                <ul className={styles.ul}>
                  <li>Retail: <br />
                    17,280 / 1 liter TetraPak / 20 Ft Container</li><br />
                  <li>
                    Bulk: <br />
                    Depend on packaging. 16-19 MT in 20 Ft Container
                  </li>
                </ul>
              </div>
            </div>
            <h2 className={styles.title}>
            bulk buy coconut water indonesia wholesale trade
          </h2>
          <div className={styles.imgBotBx}>
            <div className={styles.imgBot}>
              <Image
                // className={styles.img}
                src="/coconut/cowa5.jpg"
                width={230}
                height={200}
                alt="bulk buy wholesale coconut water Indonesia wholesale"
              />
              <div className={styles.imgDesc}>
                Coconut water @1 liter Tetra Pack
              </div>
            </div>
            <div className={styles.imgBot}>
              <Image
                // className={styles.img}
                src="/coconut/cowa4.jpg"
                width={230}
                height={200}
                alt="bulk buy coconut water Indonesia Wholesale"
              />
              <div className={styles.imgDesc}>
                Coconut water @20 L aseptic bag
              </div>
            </div>
            <div className={styles.imgBot}>
              <Image
                // className={styles.img}
                src="/coconut/cowa2.png"
                width={230}
                height={200}
                alt="bulk buy coconut water Indonesia wholesale"
              />
              <div className={styles.imgDesc}>
                Coconut water @200 liter in drum
              </div>
            </div>
          </div>
          </div>
        </div>
        <ProductSide />
      </div>
    </>
  )
}

export default Product