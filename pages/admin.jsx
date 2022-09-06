import React from 'react'
import styles from "../styles/Register.module.css"


const Register = () => {
  return (
    <div className={styles.container}>
        
        <div className={styles.form__container}>
        <h1>Login Here</h1>
        <form action="">
            <div className={styles.form__row}>
                <label>User Name</label>
                <input type="text"  name="username" required />
            </div>
            <div className={styles.form__row}>
                <label>Password</label>
                <input type="password"  name="password" required />
            </div>
            <button className={styles.button}>Login</button>
        </form>

        </div>
    </div>
  )
}

export default Register