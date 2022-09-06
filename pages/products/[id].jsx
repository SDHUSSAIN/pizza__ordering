import React, { useState } from 'react'
import styles from "../../styles/Product.module.css"
import Image from "next/image"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { addProduct } from "../../redux/cartSlice"

const Product = ({ Pizza }) => {

    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(Pizza.prices[0]);
    const [extras, setExtras] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handlePrice = (number) =>{
        setPrice(price+number);
    }

    const handleSize=(sizeIndex)=>{
        handlePrice(Pizza.prices[sizeIndex] - Pizza.prices[size]);
        setSize(sizeIndex);
    }

    const handleChange=(e,option)=>{
        const checked = e.target.checked ;

        if(checked){
            handlePrice(option.price);
            setExtras( prev=>[...prev,option.text]);
        }
        if(!checked){
            handlePrice(-option.price);
            setExtras(extras.filter((item)=> item.text!==option.text));
        }
    }

    const handleClick = () =>{
        dispatch(addProduct({...Pizza,price,extras,quantity}));
    }



    return (
        <div className={styles.container} >
            <div className={styles.left}>
                <div className={styles.image___container}>
                    <Image src={Pizza.image} layout="fill" objectFit='contain' alt='' />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{Pizza.title}</h1>
                <span className={styles.price}>${price}</span>
                <p className={styles.description}>{Pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes} >
                    <div className={styles.size} style={{ backgroundColor: size === 0 ? "yellow" : "white" }} onClick={() => handleSize(0)} >
                        <Image src="/img/size.png" layout='fill' alt='' />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} style={{ backgroundColor: size === 1 ? "yellow" : "white" }} onClick={() => handleSize(1)} >
                        <Image src="/img/size.png" layout='fill' alt='' />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} style={{ backgroundColor: size === 2 ? "yellow" : "white" }} onClick={() => handleSize(2)} >
                        <Image src="/img/size.png" layout='fill' alt='' />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose the additional ingredients</h3>
                <div className={styles.ingredients}>
                    {
                        Pizza.extra_options.map((option) => {
                            return (
                                <div className={styles.option} key={option._id}>
                                    <input type="checkbox" id={option.text} name={option.text} onChange={(e)=>handleChange(e,option)} className={styles.checkbox} />
                                    <label htmlFor={option.text}>{option.text}</label>
                                </div>
                            )
                        })
                    }


                </div>
                <div className={styles.buttonbox}>
                    <input type="number" defaultValue={1} value={quantity} className={styles.quantityNumber} onChange={(e)=>setQuantity(e.target.value)} />
                    <button className={styles.cartbutton} onClick={handleClick} >Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product


export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
        props: {
            Pizza: res.data,
        },
    }
}
