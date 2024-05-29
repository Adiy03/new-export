import React from 'react'
import styles from '../products.module.css'
import Image from 'next/image'
import { info } from '@/lib/info';

export const metadata = {
  title: " Charcoal | Indonesia Wholesale",
};

const Product = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.kiri}>
          <div className={styles.atas}>
            <Image
              className={styles.img}
              src="/(charcoal)/charcoal-briquette.jpg"
              width={500}
              height={500}
              alt="charcoal bulk buy Indonesia wholesale"
            />
          </div>
          <div className={styles.bawah}>
            <ul>
              <div className={styles.title2}> Charcoal</div>
              <li>HS Code : 4402XX</li>
              <li>MOQ     : 20 FT Container</li>
              <li>Incoterm : FOB</li>
              <li>Port: Surabaya</li>
              <li>Payment : To be discussed</li>
              <li>Packaging : In Description</li>
            </ul>
          </div>
        </div>
        <div className={styles.kanan}>
          <h1 className={styles.title}>Charcoal Bulk Buy - {info.compname}</h1>
          <div className={styles.desc}>

            <h3 className={styles.title}>HS Code: 4402XX <br />
              Wood charcoal (including shell or nut charcoal), whether or not agglomerated
            </h3>

            Charcoal is a lightweight, black carbon residue produced by heating wood or other organic materials

            <br /><br />

            <div lump charcoal>
              <h2 className={styles.title}>
                Lump Charcoal :
              </h2>
              <Image
                src="/(charcoal)/charcoal-lump.jpg"
                width={250}
                height={150}
                alt="lump charcoal bulk buy Indonesia wholesale"
                className={styles.imgFloat}
              />
              Lump Charcoal is a type of charcoal made by burning wood in the absence of oxygen until all the natural chemicals, sap, and moisture are removed, leaving only pure carbon in the shape of the original wood pieces <br /><br />

              It is often considered a more natural and traditional form of charcoal compared to briquettes. High Heat Output: Suitable for quick searing and grilling at high temperatures.
              Low Ash Production: Results in less cleanup and more efficient cooking.
              <br /><br />

              <div className={styles.split}>
                <div className={styles.split_kiri}>
                  <h3 className={styles.title}>
                    Lump Charcoal Benefits :
                  </h3>
                  <ul className={styles.ul}>
                    <li>Burns hotter than briquettes</li>
                    <li>Lights quickly</li>
                    <li>Produces less ash</li>
                    <li>Offers a more distinct wood flavor</li>
                  </ul>
                  <br />
                  <h3 className={styles.title}>
                    Lump Charcoal Uses :
                  </h3>
                  <ul className={styles.ul}>
                    <li>Imparts a natural, smoky flavor to food, which is highly desirable in grilling</li>
                    <li>Can reach higher temperatures quickly, making it ideal for searing meats</li>
                  </ul>
                </div>
                <div className={styles.split_kanan}>
                  <ul className={styles.ul}>
                    <li>Suitable for both direct and indirect grilling</li>
                    <li>Burns cleanly with minimal ash, making cleanup easier</li>
                    <li>Adds a distinct, rich flavor to smoked foods due to the variety of wood used to make lump charcoal.
                    </li>
                    <li>High Heat Ideal for use in ceramic grills and kamado cookers, which are designed to retain heat efficiently</li>
                  </ul>
                </div>
              </div>
            </div>

            <br />

            <div charcoal briq>
              <h2 className={styles.title}>
                Charcoal Briquettes :
              </h2>
              Charcoal Briquettes are a type of charcoal made from compressed sawdust and other wood by-products, combined with additives to help them light easily and burn consistently. These briquettes are typically uniform in size and shape, often formed into pillow-shaped or hexagonal pieces. <br /><br />

              Made from a mixture of sawdust, wood chips, coal dust, and other organic materials, bound together with a binder such as starch
              <br /><br />

              <div className={styles.split}>
                <div className={styles.split_kiri}>
                  <h3 className={styles.title}>
                    Charcoal Uses <br /> & Benefits :
                  </h3>
                  <ul className={styles.ul}>
                    <li>Suitable for low and slow cooking due to their ability to maintain a steady, low temperature for extended periods</li>
                    <li>Widely used in restaurants and food services that require a predictable and long-lasting heat source</li>
                    <li>Burns longer than lump charcoal, making it ideal for extended cooking sessions</li>
                    <li>Easier to control during cooking</li>
                    <li>Provides a steady, reliable heat source, making it easier to maintain consistent cooking temperatures</li>
                    <li>Lights easily and burns for a long time, which is ideal for prolonged grilling sessions</li>
                  </ul>
                  <br />
                  <h3 className={styles.title}>
                    Charcoal briquettes Cube Spesifications :
                  </h3>
                  <ul className={styles.ul}>
                    <Image
                      src="/(charcoal)/briquettes-cube.jpeg"
                      width={150}
                      height={150}
                      alt="charcoal briquettes bulk buy Indonesia wholesale"
                      className={styles.imgFloat}
                    />
                    <li>Shape: 25 mm3</li>
                    <li>Raw Material: 100% Coconut Shell</li>
                    <li>Burning time: 2 to 3 hours</li>
                    <li>Calorie: 7800 Kcal</li>
                    <li>Moisture: 6% max</li>
                    <li>Ash Content: 3% max</li>
                    <li>Carbon: 80%</li>
                    <li>Colour: Nature white</li>
                  </ul>
                  <br />
                </div>
                <div className={styles.split_kanan}>
                  <h3 className={styles.title}>
                    Charcoal briquettes Hexagonal Spesifications :
                  </h3>
                  <Image
                    src="/(charcoal)/charcoal-briquette.jpg"
                    width={150}
                    height={150}
                    alt="charcoal briquettes bulk buy Indonesia wholesale"
                    className={styles.imgFloat}
                  />
                  <ul className={styles.ul}>
                    <li>Shape: Hexagonal</li>
                    <li>Raw Material: 100% Hardwood</li>
                    <li>Burning time: 6 to 7 hours</li>
                    <li>Calorie: 6800 Kcal</li>
                    <li>Moisture: 6% max</li>
                    <li>Ash Content: 8% max</li>
                    <li>Carbon: 60%</li>
                    <li>Colour: Ash white</li>
                  </ul>
                </div>
              </div>
            </div>

            <br />

            <div act charcoal>
              <h2 className={styles.title}>
                Activated charcoal Carbon :
              </h2>
              <Image
                src="/(charcoal)/act-charcoal.png"
                width={250}
                height={150}
                alt="Activated charcoal bulk buy Indonesia wholesale"
                className={styles.imgFloat}
              />
              Activated charcoal, also known as activated carbon, is a form of carbon that has been processed to create a vast network of small pores and a large surface area per unit volume <br /><br />

              This porous structure gives activated charcoal its unique adsorptive properties, meaning it can bind to and trap molecules, ions, and particles on its surface through a process called adsorption <br /><br />

              <h3 className={styles.title}>
                Activated Charcoal Spesifications :
              </h3>
              <ul className={styles.ul}>
                <li>Size: 4x8 / 3x6 Mesh</li>
                <li>Raw Material: 100% Coconut Shell</li>
                <li>Moisture : 13% Max</li>
                <li>Ash Content: 3% max</li>
                <li>Carbon: 70% Min</li>
                <li>Volatile : 13% Max</li>
              </ul>

              <br />

              <h3 className={styles.title}>
                Activated charcoal Uses & Benefits:
              </h3>
              <b>Adsorption of Toxins:</b> Activated charcoal is highly effective at adsorbing toxins, chemicals, and poisons, making it valuable in emergency medical treatments for poisonings and overdoses <br /><br />

              <b>Water Purification:</b> Used in water filtration systems to remove impurities, contaminants, and pollutants from drinking water. It can effectively adsorb organic compounds, chlorine, heavy metals, and other substances, improving water quality <br /><br />

              <b>Air Purification:</b> Employed in air purifiers, masks, and filters to remove harmful gases, odors, and volatile organic compounds (VOCs) from indoor air, contributing to better indoor air quality <br /><br />

              <b>Digestive Health:</b> Ingested orally, activated charcoal can help alleviate symptoms of gas, bloating, and indigestion by adsorbing excess gas and toxins in the digestive tract. It is commonly used as a natural remedy for gastrointestinal discomfort <br /><br />

              <b>Skin Care:</b> Found in skincare products like masks, cleansers, and soaps, activated charcoal can help cleanse the skin by adsorbing dirt, oil, and impurities from pores. It is often used in products targeting acne-prone and oily skin <br /><br />

              <b>Teeth Whitening:</b> Used in toothpaste and teeth whitening products, activated charcoal can help remove surface stains from teeth through its adsorptive properties, leading to a brighter smile <br /><br />
            </div>

            <h2 className={styles.title}>
              Charcoal Bulk Buy Indonesia Wholesale Trade
            </h2>
            Indonesia has vast forests and plantations that provide an ample supply of raw materials such as coconut shells and wood. The countrys tropical climate supports rapid growth of these resources, ensuring a steady and sustainable supply for charcoal production <br /><br />

            High-Quality Products: Indonesian charcoal, especially from coconut shells, is renowned for its high quality. It burns longer, produces less smoke, and has a higher calorific value, making it preferable for both industrial and domestic uses <br /><br />

            Strategic Location: Indonesias geographical location is advantageous for exporting goods. Being in Southeast Asia, it has easy access to major shipping routes, reducing transportation costs and delivery times to key markets in Asia
          </div>
        </div>
      </div>
    </>
  )
}

export default Product