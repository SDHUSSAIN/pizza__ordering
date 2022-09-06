import styles from "../../styles/Order.module.css"
import Image from "next/image"
import axios from "axios";
const Order = ({orderdata}) => {

    const status = 0;

    const styleStatus = (index) => {
        if (index - status < 1) return styles.done;
        if (index - status === 1) return styles.in__progress;
        if (index - status > 1) return styles.undone;

    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.tr}>
                                <td>Order Id</td>
                                <td>Customer Name</td>
                                <td>Subtotal</td>
                                <td>Discount</td>
                                <td>Taxes</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.tr_values}>
                                <td>{orderdata._id}</td>
                                <td>{orderdata.customer}</td>
                                <td>${orderdata.total}</td>
                                <td>$20</td>
                                <td>$1</td>
                                <td>${orderdata.total}</td>
                            </tr>



                        </tbody>
                    </table>
                    <div className={styles.row}>
                        <div className={styleStatus(0)}>
                            <div className={styles.image__container}>
                                <Image src="/img/paid.png" layout="fill" objectFit="contain" />

                            </div>
                            <span>Payment</span>
                            <div className={styles.checked__icon}>
                                <Image src="/img/checked.png" width="20px" height="20px" />
                            </div>
                        </div>
                        <div className={styleStatus(1)}>
                            <div className={styles.image__container}>

                                <Image src="/img/bake.png" layout="fill" objectFit="contain" />
                            </div>
                            <span>Preparing</span>
                            <div className={styles.checked__icon}>
                                <Image src="/img/checked.png" width="20px" height="20px" />
                            </div>
                        </div>
                        <div className={styleStatus(2)}>
                            <div className={styles.image__container}>

                                <Image src="/img/bike.png" layout="fill" />
                            </div>
                            <span>On the Way</span>
                            <div className={styles.checked__icon}>
                                <Image src="/img/checked.png" width="20px" height="20px" />
                            </div>
                        </div>
                        <div className={styleStatus(3)}>
                            <div className={styles.image__container}>

                                <Image src="/img/delivered.png" layout="fill" objectFit="contain" />
                            </div>
                            <span>Delivered</span>
                            <div className={styles.checked__icon}>
                                <Image src="/img/checked.png" width="20px" height="20px" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>CART TOTAL</h2>
                        <div className={styles.total__text}>
                            <b className={styles.total__text__title}>Subtotal:</b>${orderdata.total}
                        </div>
                        <div className={styles.total__text}>
                            <b className={styles.total__text__title}>Discount:</b>$
                        </div>
                        <div className={styles.total__text}>
                            <b className={styles.total__text__title}>Taxes</b>$
                        </div>
                        <div className={styles.total__text}>
                            <b className={styles.total__text__title}>Total:</b>${orderdata.total}
                        </div>

                        <button disabled className={styles.paid}>PAID</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Order;



export const getServerSideProps = async({params}) =>{
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
    return {
        props:{
            orderdata:res.data,
        }
    }
};