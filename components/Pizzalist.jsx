import React from 'react'
import styles from "../styles/Pizzalist.module.css"
import PizzaCard from './PizzaCard'

const Pizzalist = ({list}) => {

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Best PIZZA in Town</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, iure earum culpa aut nesciunt et. Esse officia voluptatibus obcaecati, repudiandae quia consectetur, vel blanditiis placeat aliquam soluta corporis asperiores possimus!</p>
        <div className={styles.pizza__list}>
          {list.map((pizza)=>{
            return(
              <PizzaCard key ={pizza._id} data={pizza}/>
            )

          })}
            

        </div>
    </div>
  )
}



export default Pizzalist ;



