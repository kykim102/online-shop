import React from 'react'
import styles from './Cart.module.css'
import classicTee from '../../assets/classic-tee.jpg'

const Cart = ({ openCart, cartItems }) => {
  return (
    <div
      className={styles.container}
      style={{ display: `${!openCart ? 'none' : 'block'}` }}
    >
      <div className={styles.cart}>
        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>Your cart is empty</div>
        ) : (
          <ul className={styles.cartItems}>
            {cartItems.map(cartItem => {
              return (
                <li
                  key={`${cartItem.title}${cartItem.size}}`}
                  className={styles.clearfix}
                >
                  <img
                    className={styles.itemImg}
                    src={classicTee}
                    alt={`${cartItem.title}-img ${cartItem.size}`}
                  />
                  <div className={styles.contentContainer}>
                    <div className={styles.name}>{cartItem.title}</div>
                    <div className={styles.priceContainer}>
                      {`${cartItem.quantity}`} X{' '}
                      <span className={styles.price}>
                        ${`${cartItem.price}`}
                      </span>
                    </div>
                    <div className={styles.size}>
                      Size: {`${cartItem.size}`}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Cart
