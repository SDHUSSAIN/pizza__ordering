import React, { useState } from 'react'
import styles from "../styles/Featured.module.css"
import Image from "next/image"

export const Featured = () => {

    const [slideNo, setSlideNo] = useState(0);

    const handleArrow = (direction) => {
        if (direction === "left") {
            setSlideNo(slideNo !== 0 ? slideNo - 1 : 3);
        }
        if (direction === "right") {
            setSlideNo(slideNo !== 3 ? slideNo + 1 : 0);
        }

    }
    const images = [
        {
            name:"PAN PIZZA",
            source:"/img/featured1.png",
            deal:"70% OFF"
        },
        {
            name:"PAPARONI PIZZA",
            source:"/img/featured2.png",
            deal:"BUY 1 GET 1 Free"
        },
        {
            name:"ITALINO PIZZA",
            source:"/img/featured3.png",
            deal:"Extra Cheese Free"
        },
        {
            name:"CHEESEBURST PIZZA",
            source:"/img/featured4.png",
            deal:"Super Sunday Saver"
        }

    ]
    return (
        <div className={styles.container}>
            <div className={styles.arrow__container} style={{ left: "0" }} onClick={() => handleArrow("left")}>
                <Image src="/img/arrowl.png" alt="" layout='fill' objectFit='contain' />
            </div>
            <div className={styles.wrapper} style={{ transform: `translateX(${-100 * slideNo}vw)` }}>
                {
                    images.map((item, i) => {
                        return (
                            <div className={styles.image__container} key={i}>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginRight:"40px"}}>
                                    <p style={{ color: "white", fontSize: "50px",lineHeight:"0px"   }}>Best</p>
                                    <h1 className={styles.item__name} >{item.name}</h1>
                                    <p className={styles.item__deal} >{item.deal}</p>
                                </div>
                                <div>

                                    <Image src={item.source} alt="" width="600px" height="600px" objectFit='contain' />
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className={styles.arrow__container} style={{ right: "0" }} onClick={() => handleArrow("right")} >
                <Image src="/img/arrowr.png" alt="" layout='fill' objectFit='contain' />
            </div>

        </div>
    )
}
