import React from 'react'
import styles from '../products.module.css'
import Image from 'next/image'
import { info } from '@/lib/info';

export const metadata = {
  title: "Desiccated coconuts - Indonesia Wholesale",
};

const Products = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.kiri}>
          <div className={styles.atas}>
            <Image
              className={styles.img}
              src="/coconut/desiccated-coconut.jpg"
              width={100}
              height={100}
              alt="bulk buy desiccated coconuts Indonesia wholesale"
            />
          </div>
          <div className={styles.bawah}>
            <ul>
              <div className={styles.title2}>Desiccated coconuts</div>
              <li>HS Code : 080111</li>
              <li>MOQ     : 20 FT / 350 bags</li>
              <li>Incoterm : FOB</li>
              <li>Port: Surabaya</li>
              <li>Payment : TBD</li>
              <li>Packaging : 25 Kg 3 layers paper kraft bag with inner food grade low density polythylene bag</li>
            </ul>
            {/* <button className={styles.penawaran}>penawaran</button> */}
          </div>
        </div>
        <div className={styles.kanan}>
          <h1 className={styles.title}>Bulk buy Desiccated coconuts - {info.compname}</h1><br />
          <h2 className={styles.title}>What is Desiccated coconuts ?</h2>
          <div className={styles.desc}>
            Desiccated coconuts refers to the dried and shredded or grated meat of a mature coconuts. The difference between coconuts and desiccated coconuts is desiccated coconuts has smaller, finer flecks, with less flavor than shredded coconuts <br /><br />

            Desicatted coconuts commonly used in cooking and baking due to its sweet, nutty flavor and versatility. The coconuts is high in natural fats, low in sugar, high in natural protein and keto-friendly
            <br /><br />

            The term desiccated means thoroughly dried. In the context of coconuts, it means the coconuts meat has been dried to remove most of its moisture content <br /><br />

            <h2 className={styles.title}>high fat and low fat Desiccated coconuts</h2>

            Desiccated coconuts comes in two main varieties: high fat and low fat. These differ primarily in their fat content<br />

            <div className={styles.split}>
              <div className={styles.split_kiri}>
                <h3 className={styles.title}>High Fat Desiccated coconuts</h3>
                <ul className={styles.ul}>
                  <li>Typically contains around 60-70% fat</li>
                  <li>Richer and more intense coconuts flavor due to the higher fat content</li>
                  <li>Moist and tender</li>
                  <li>Can be shredded, flaked, or powdered, usually with a creamy white color</li>
                  <Image
                    src="/coconut/high-fat.webp"
                    width={250}
                    height={150}
                    alt="High Fat Desiccated coconuts from EasyExportID"
                    className={styles.imgAdjust}
                  />
                </ul>
              </div>
              <div className={styles.split_kanan}>
                <h3 className={styles.title}>Low Fat Desiccated coconuts</h3>
                <ul className={styles.ul}>
                  <li>Contains around 10-20% fat</li>
                  <li>Milder coconuts flavor compared to high fat versions</li>
                  <li>Drier and less tender</li>
                  <li>Similar in form to high fat desiccated coconuts but typically lighter and drier</li>
                  <Image
                    src="/coconut/low-fat.jpg"
                    width={250}
                    height={150}
                    alt="Low Fat Desiccated coconuts from EasyExportID"
                    className={styles.imgAdjust}
                  />
                </ul>
              </div>
            </div>

            <br />

            <h2 className={styles.title}>high fat and low fat Desiccated coconuts Uses:</h2>

            Both types of desiccated coconuts bring the distinctive flavor and nutritional benefits of coconuts to a wide range of applications, catering to different dietary preferences and uses <br />

            <div className={styles.split}>
              <div className={styles.split_kiri}>
                <h3 className={styles.title}>High Fat Desiccated coconuts</h3>
                <div className={styles.pad}>
                  High Fat Desiccated coconuts is favored for rich, flavorful recipes where the fat content enhances the texture and taste. It’s particularly popular in creamy dishes <br /><br />

                  Adds moisture and rich flavor to cakes, cookies, muffins, and other baked goods <br /><br />

                  Used in puddings, ice creams, and coconuts-based sweets for a rich, coconutsty taste.
                </div>
              </div>
              <div className={styles.split_kanan}>
                <h3 className={styles.title}>Low Fat Desiccated coconuts</h3>
                <div className={styles.pad}>
                  Low Fat Desiccated coconuts is ideal for those looking to enjoy coconuts flavor without the high fat content. Its used in lighter recipes and snacks <br /><br />

                  Suitable for dishes where a coconuts flavor is needed but with lower fat content, such as light curries and soups <br /><br />
                </div>
              </div>
            </div> <br />

            <h2 className={styles.title}>Desiccated Benefits:</h2>

            Both varieties are rich in essential minerals like iron, manganese, and copper, contributing to various bodily functions including oxygen transport, antioxidant defense, and bone health <br /><br />

            <h2 className={styles.title}>Desiccated coconuts Spesification:</h2>

            <div className={styles.split}>
              <div className={styles.split_kiri}>
                <h3 className={styles.title}>High Fat Desiccated coconuts</h3>
                <ul className={styles.ul}>
                  <li>Appearences & Colour: White (free from yellow specks)</li>
                  <li>Flavour & Taste: Milky & sweet coconuts Flavour</li>
                  <li>Size: Fine / medium granule of coconuts</li>
                  <li>Total Fat: 65%</li>
                  <li>PH: 6,1 - 6,7</li>
                  <li>Moisture: Max: 3%</li>
                </ul>
                <br />
              </div>
              <div className={styles.split_kanan}>
                <h3 className={styles.title}>Low Fat Desiccated coconuts</h3>
                <ul className={styles.ul}>
                  <li>Appearences & Colour: White (free from yellow specks)</li>
                  <li>Flavour & Taste: Milky & sweet coconuts Flavour</li>
                  <li>Size: Fine granule of coconuts</li>
                  <li>Total Fat: 45%</li>
                  <li>PH: 6,1 - 6,7</li>
                  <li>Moisture: Max: 3%</li>
                </ul>
              </div>
            </div> <br />

            <h2 className={styles.title}> Desiccated coconuts Indonesia</h2>

            Indonesia is one of the leading producers of desiccated coconuts in the world. Desiccated coconuts from Indonesia is known for its high quality and is widely used in various industries globally <br /><br />

            coconuts Varieties: Indonesia cultivates various coconuts varieties, particularly in regions like Sumatra, Java, and Sulawesi, which are known for their high yield and quality <br /><br />

            Desiccated coconuts is produced by shredding fresh coconuts meat and then drying it to remove moisture content. The process involves several stages, including shelling, paring, washing, heating, and drying <br /><br />

            Indonesian desiccated coconuts is available in different grades based on granularity, such as fine, medium, and coarse, catering to diverse culinary and industrial needs <br /><br />

            <h2 className={styles.title}>
              Bulk Buy Desiccated coconuts Indonesia Wholesale Trade
            </h2>

            <div className={styles.imgBotBx}>
              <div className={styles.imgBot}>
                <Image
                  // className={styles.img}
                  src="/coconut/dc2.png"
                  width={230}
                  height={200}
                  alt="desiccated coconuts from easyexportid"
                />
                <div className={styles.imgDesc}>
                  High Fat Desiccated coconuts
                </div>
              </div>
              <div className={styles.imgBot}>
                <Image
                  // className={styles.img}
                  src="/coconut/dc1.png"
                  width={230}
                  height={200}
                  alt="desiccated coconuts from easyexportid"
                />
                <div className={styles.imgDesc}>
                  Low Fat Desiccated coconuts
                </div>
              </div>
              <div className={styles.imgBot}>
                <Image
                  // className={styles.img}
                  src="/coconut/dc3.png"
                  width={230}
                  height={200}
                  alt="desiccated coconuts from easyexportid"
                />
                <div className={styles.imgDesc}>
                  On Loading Progress
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Products