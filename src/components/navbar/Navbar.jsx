"use client";

import Link from "next/link";
// import React from "react";
import styles from "./navbar.module.css";
import React, { useState, useEffect } from 'react';
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Product",
    url: "/product",
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "Inquiry",
    url: "/inquiry",
  },
];

const Navbar = () => {

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.container} ${isSticky ? styles.sticky : ''}`}>
      <Link href="/" className={styles.logo}>
      <Image
          src="/logo.jpg"
          width={80}
          height={80}
          alt="Picture of the author"
          className={styles.logo}
        />
        EasyExport<span className={styles.span}>ID</span>
      </Link>
      <Link href="https://wa.me/6285155032886?text=Hi EasyExportID, I want to make some Inquiry!" target="_blank" id="toggle1" className={styles.logo2}>
      <Image
          src="/wa.webp"
          width={50}
          height={50}
          alt="Picture of the author"
          className={styles.logo}
        />
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;