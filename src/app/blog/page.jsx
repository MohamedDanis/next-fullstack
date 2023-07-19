import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
async function getData() {
  const res = await fetch('http://localhost:3000/api/posts',{cache:"no-store"})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  console.log("success");
  return res.json()
}
async function Blog() {
  const data=await getData();
  console.log(data[0]);
  return (
    <div className={styles.mainContainer}>
      {data.map((item)=>(
    <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
    <div className={styles.imageContainer}>
      <Image
        src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
        alt=""
        width={400}
        height={250}
        className={styles.image}
      />
    </div>
    <div className={styles.content}>
      <h1 className={styles.title}>{item.title}</h1>
      <p className={styles.desc}>{item.desc}</p>
    </div>
  </Link>
        
      ))}
    
    </div>
  )
}

export default Blog