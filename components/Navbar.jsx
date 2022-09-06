import React from 'react'
import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useSelector } from 'react-redux'
import Link from "next/link"

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.call__button}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now</div>
          <div className={styles.text}>+91 9899999899</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.list__item}>Homepage</li>
          <li className={styles.list__item}>Products</li>
          <li className={styles.list__item}>Menu</li>
          <Link href={"/"} passHref>
          <Image src="/img/logo.png" alt='' width="160" height="96" />

          </Link>
          <li className={styles.list__item}>Events</li>
          <li className={styles.list__item}>Blog</li>
          <li className={styles.list__item}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href={"/cart"} passHref >
            <Image src="/img/cart.png" alt='' width="30" height="30" />
          </Link>
            <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar