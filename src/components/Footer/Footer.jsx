import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.container}>
      <div >2023 Lamamia. All rights reserved</div>  
      <div className={styles.social}>
        <Image width={15} height={15}className={styles.icon} src="/_facebook.png" alt="img"/>
        <Image width={15} height={15}className={styles.icon} src="/_instagram.png" alt="img"/>
        <Image width={15} height={15}className={styles.icon} src="/_twitter.png" alt="img"/>
        <Image width={15} height={15}className={styles.icon} src="/_youtube.png" alt="img"/>
      </div>  
    </div>
  )
}

export default Footer