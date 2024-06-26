"use client"

import { useState } from 'react';
import { images } from './data';
import styles from './products.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const filteredImages = images.filter(image => {
    if (selectedTag && !image.tags.includes(selectedTag)) {
      return false;
    }
    if (
      (searchTerm && !image.tags.some(tag => tag.includes(searchTerm.toLowerCase()))) &&
      (searchTerm && !image.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (searchTerm && !image.hsCode.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className={styles.container}>
      {/* <h2 className={styles.title}>Products</h2> */}
      <div className={styles.searchBox}>
        <input className={styles.input}
          type="text"
          placeholder="Type Product Name or HS Code"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={styles.sortTitleBx}>
        --- Or Sort By Category ---
      </div>
      <div className={styles.titleTag}>
        {['all', 'agriculture', 'food & beverages', 'others'].map(tag => (
          <button className={styles.tagBtn}
            key={tag}
            onClick={() => setSelectedTag(tag === 'all' ? '' : tag)}
            style={{
              backgroundColor: selectedTag === tag ? 'beige' : 'teal',
              color: selectedTag === tag ? 'black' : 'white'
            }}
          >
            {tag.toUpperCase()}
          </button>
        ))}
      </div>
      <div className={styles.badan}>
        {filteredImages
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(image => (
            <Link href={`/${image.urlPath}`} key={image.id}>
              <div className={styles.card}>
                <Image
                  src={image.url}
                  alt={image.name}
                  width={135}
                  height={120}
                  className={styles.imgCard} />
                <p className={styles.nama}>{image.name}</p>
                <p className={styles.nama}>{image.hsCode}</p>
                <p className={styles.nama}></p>
              </div>
            </Link>
          ))}
      </div>

    </div>
  );
}
