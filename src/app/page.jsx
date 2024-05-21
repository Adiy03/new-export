import Image from "next/image";
import styles from "./page.module.css";
import Steps from "@/components/steps/Steps";
import Products from "@/components/products/Products";
import Service from "@/components/service/Service";
import Whatsapp from "@/components/whatsapp/Whatsapp";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
      <Whatsapp />
        <div className={styles.kiri}>Easy find, select, compare and export the best products from Indonesia</div>
        <div className={styles.kanan}>
        <Image
          src="/indo.png"
          width={500}
          height={250}
          alt="Picture of the author"
          className={styles.imgHero}
        />
        </div>
      </div>
      <Products />
      <Steps />
      <Service />
    </>
  );
}
