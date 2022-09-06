import React, { useState } from 'react'
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { reset } from '../redux/cartSlice'
import { useRouter } from 'next/router'
import styles from "../styles/deliveryInfo.module.css"



const DeliveryCard = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const total = useSelector((state) => state.cart.total);
    const dispatch = useDispatch();
    const router = useRouter();

    const createOrder = async () => {
        if( name ==="" && address==="" ){
            alert("Please fill the name and address details");
            return;
        }
        const data = {
            customer: name,
            address: address,
            total: total,
            payment_method: 0
        }
        try {
            const res = await axios.post("http://localhost:3000/api/orders/order", data);
            res.status === 201 && router.push("/orders/" + res.data._id);
            dispatch(reset());
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className={styles.container}>
            <div>
                <h1 style={{color:"#333"}}>Please fill your name and address<br/> details to complete  your order<br/> of amount <strong style={{color:"#f1411e"}}> ${total}</strong> </h1>
            </div>
            <div className={styles.form__container}>
                
                    <div>
                        <label className={styles.label}>Your Full Name</label>
                        <input className={styles.input} type="text" onChange={(e) => setName(e.target.value)}  required/>
                        <label className={styles.label}>Your Contact No</label>
                        <input className={styles.input} type="text"  required/>

                        <label className={styles.label}>Please fill your Delivery address</label>
                        <textarea className={styles.input} type="text" rows="3" onChange={(e) => setAddress(e.target.value)}  required/>

                    </div>

                    
                
                <button onClick={createOrder} className={styles.button}>Submit</button>
            </div>
        </div>
    )
}

export default DeliveryCard