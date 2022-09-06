import React from 'react'
import styles from "../styles/Footer.module.css"
import Image from "next/image"

const Footer = () => {
  return (
    <div className={styles.footer__container} >
      <div className={styles.item}>
        <Image src="/img/bg.png" layout='fill' alt='' objectFit='contain' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES WE DID. THE MANGALO PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURENTS</h1>
          <p className={styles.text}>
            Panchkula Sector 11
          </p>
          <p className={styles.text}>
            Amritsar Near Golden Temple
          </p>
          <p className={styles.text}>
            Netaji Subhash Place Delhi
          </p>
          <p className={styles.text}>
            Canougt Place Delhi
          </p>
          <p className={styles.text}>
              Pitampura Delhi
          </p>
          <p className={styles.text}>
            Rohini Sector 11 Delhi
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OUR WORKING HOURS</h1>
          <p className={styles.text}>
            Monday to Friday 
            <br/>11:00 A.M. to 11:00 P.M.
          </p>
          <p className={styles.text}>
            Saturday to Sunday 
            <br/>9:00 A.M. to 11:00 P.M.
          </p>

        </div>
        
      </div>
    </div>
  )
}

export default Footer