import React from 'react'
import styles from "../styles/PizzaCard.module.css"
import Image from "next/image"
import Link from 'next/link'
const PizzaCard = ({ data }) => {
  return (
    <div className={styles.pizza__container}>
      <Link href =  {`/products/${data._id}`} passHref >
        <Image src={data.image} alt='' width="200" height="200" />
      </Link>
      <h1 className={styles.title}>{data.title}</h1>
      <span className={styles.price}>${data.prices[0]}</span>
      <p className={styles.description} >{data.desc}</p>
    </div>
  )
}

export default PizzaCard