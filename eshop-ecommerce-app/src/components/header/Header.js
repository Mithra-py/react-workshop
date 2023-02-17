import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Header.module.scss"
import {FaShoppingCart} from "react-icons/fa"

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        e<span>Shop</span>.
      </h2>
    </Link>
  </div>
)

const card = (
  <span className={styles.cart}>
              <Link to="/card">
                Card
                <FaShoppingCart size={20}/>
                <p>0</p>
              </Link>
            </span>
)


const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        {logo}

        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact Us
              </Link>
            </li>

          </ul>

          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/order-history">My Orders</Link>
            </span>
            {card}
          </div>
        </nav>

      </div>
    </header>
  )
}

export default Header