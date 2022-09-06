import React,{useState} from 'react'
import styles from "../styles/Cart.module.css"
import Image from "next/image"
import { useSelector} from "react-redux"
import { useRouter } from 'next/router'


const Cart = () => {

    const products = useSelector(state => state.cart.products);
    const total = useSelector(state => state.cart.total);
    const [display, setDisplay]  = useState(false) ;
    const router = useRouter();
   


    const redirect = () =>{
        router.push("/deliveryInfo")

    }
    
    return (
        <>
            <div className={styles.container}>


                <div className={styles.table__container}>
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.tr}>
                                <td>Product</td>
                                <td>Name</td>
                                <td>Extras</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product) => (
                                    <tr key={product._id} >
                                        <td><Image src={product.image} alt="" width="60px" height="60px" /></td>
                                        <td>{product.title}</td>
                                        <td>{product.extras}</td>
                                        <td>${product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>${product.price * product.quantity}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className={styles.cart__total}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>CART TOTAL</h2>
                        <div className={styles.total__text}>
                            <b className={styles.total__text__title}>Subtotal:</b>${total}
                        </div>
                        <div className={styles.total__text}>
                            <b className={styles.total__text__title}>Discount:</b>$0
                        </div>
                        <div className={styles.total__text}>
                            <b className={styles.total__text__title}>Taxes</b>$0
                        </div>
                        <div className={styles.total__text}>
                            <b className={styles.total__text__title}>Total:</b>${total}
                        </div>

                        <button className={styles.checkout} onClick={()=>setDisplay(!display)}>Checkout Now</button>
                        <div style={{display: display ? "flex" : "none" }}>
                            <button className={styles.checkout} onClick={redirect}>Cash on Delivery</button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Cart