import React,{useState} from 'react'
import styles from "../styles/Report.module.css"
import axios from "axios"
import Image from "next/image"

 const Report = ({list,productlist}) => {
    const [orderlist,setOrderList] = useState(list);
    const [products, setProducts] = useState(productlist);

    const [report, setReport] = useState(true);
    const handleChangeStatus = async(id) =>{
        console.log(id);
        await axios.put(`http://localhost:3000/api/orders/${id}`,{status:1});
        const res = await axios.get("http://localhost:3000/api/orders/order");
        setOrderList(res.data);

    }

    const handleProductDelete = async(id)=>{
        await axios.delete(`http://localhost:3000/api/products/${id}`);
        const res = await axios.get("http://localhost:3000/api/products");
        setProducts(res.data);
    }
    const handleProductEdit = async(id)=>{
        await axios.put(`http://localhost:3000/api/products/${id}`)
    }
    // console.log(list);
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h3  style={{textAlign:"center",color:"#d1411e"}}>Dashboard</h3>
            
                <li onClick={()=>setReport(!report)} className={styles.list__item}>Orders Report</li>
                <li onClick={()=>setReport(!report)} className={styles.list__item}>Product Report</li>
        
        </div>
        <div className={styles.right}>
            <h2 style={{textAlign:"center",color:"#d1411e"}}>{report ?  "Orders Report" : "Products Report"}</h2>
            {
                report && <div className={styles.orders}>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.table__row}>
                        <td> Order Id</td>
                            <td> Customer Name</td>
                            <td> Address</td>
                            <td> Total</td>
                            <td> Status</td>
                            <td> Payment Method</td>
                            <td> Actions</td>
                        </tr>
                    </thead>
                    <tbody>

                    {
                            orderlist && orderlist.map((order)=>(
                                <tr className={styles.table__row} key={order._id} >
                            <td>{order._id}</td>
                            <td>{order.customer}</td>
                            <td> {order.address}</td>
                            <td> ${order.total}</td>
                            <td> {order.status ===0 ? "Pending" : "Delivered" }</td>
                            <td> {order.payment_method ===0 ? "Cash on Delivery" : "Paid"}</td>
                            <td>  {order.status ===0 ? <div><button  onClick={()=>handleChangeStatus(order._id)}>Change Status</button></div>:"Pizza delivered and status changed"}</td>
                        </tr>
                            ))
                        }
                        
                        
                    </tbody>
                </table>
            </div> 
            }
               {
                !report && <div className={styles.products}>
                    <button className={styles.add__button}>+Add New Product</button>
                <table className={styles.table}>
                         <thead>
                             <tr className={styles.table__row}>
                                 <td> Product Id</td>
                                 <td> Image</td>
                                 <td> Product Name</td>
                                 <td> Prices(S, M, L)</td>
                                 <td> Extras</td>
                                 <td> Actions</td>
                                 
 
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 products && products.map((product)=>(
                                     <tr className={styles.table__row} key={product._id} >
                                 <td>{product._id}</td>
                                 <td><Image src={product.image} width="30px" height="30px"/></td>
                                 <td>{product.title}</td>
                                 <td>{product.prices.map((price)=>(
                                    <span>{price}, </span>
                                 ))}</td>
                                 <td>{product.extra_options.map((option)=>(
                                    <span>{option.text}-${option.price}</span>
                                 ))}</td>
                                 <td><div>
                                        <button onClick={handleProductEdit}>Edit</button>
                                        <button onClick={()=>handleProductDelete(product._id)}>Delete</button>
                                    </div>
                                </td>
                                 
                             </tr>
                                 ))
                             }
                             
                             
                         </tbody>
                     </table>
                
                </div>
               }
               
        </div>

    </div> 
  )

}

export const getServerSideProps = async () =>{
    const res = await axios.get("http://localhost:3000/api/orders/order");
    const productres = await axios.get("http://localhost:3000/api/products");
  
    return{
      props:{
        list:res.data,
        productlist:productres.data,
      },
    }
  }
  

export default Report ;