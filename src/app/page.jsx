import Image from "next/image";
import styles from "./page.module.css";
import Steps from "@/components/steps/Steps";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.kiri}>makes it easier for importers to find, select, compare and export the best products from Indonesia</div>
        <div className={styles.kanan}>
        <Image
          src="/idn.gif"
          width={300}
          height={300}
          alt="Picture of the author"
        />
        </div>
      </div>
      <Steps />
      <Products />
    </>
  );
}
