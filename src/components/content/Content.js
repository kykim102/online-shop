import { useState } from 'react'
import styles from './Content.module.css'
import classicTee from '../../assets/classic-tee.jpg'

const Content = ({ itemData, setCartItems, cartItems }) => {
  const [selectedSize, setSelectedSize] = useState(null)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const handleSizeClick = e => {
    if (e.target.innerText === selectedSize) {
      setSelectedSize(null)
    } else {
      setSelectedSize(e.target.innerText)
    }
  }

  const handleAddToCart = () => {
    if (selectedSize === null) {
      setShowErrorMessage(true)
    } else {
      setShowErrorMessage(false)
      const itemExists = cartItems.find(
        item => item.id === itemData.id && item.size === selectedSize
      )

      if (itemExists) {
        itemExists.quantity += 1
      } else {
        const newItem = {
          id: itemData.id,
          title: itemData.title,
          price: itemData.price.toFixed(2),
          imageURL: itemData.imageURL,
          size: selectedSize,
          quantity: 1
        }
        cartItems.push(newItem)
      }

      setSelectedSize(null)
      setCartItems([...cartItems])
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.productImgContainer}>
        <img src={classicTee} className={styles.productImg} alt='T-Shirt' />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.name}>{`${itemData.title}`}</div>
        <div className={styles.price}>{`$${itemData.price.toFixed(2)}`}</div>
        <div className={styles.description}>{itemData.description}</div>
        <div className={styles.sizeLabel}>
          Size<span className={styles.star}>*</span>
          <span className={styles.selectedSize}>{selectedSize}</span>
        </div>
        <div className={styles.sizeBtnContainer}>
          {itemData.sizeOptions.map(size => {
            return (
              <div
                key={size.id}
                className={`${styles.sizeBtn} ${
                  size.label === selectedSize && styles.selected
                }`}
                onClick={e => handleSizeClick(e)}
              >
                {size.label}
              </div>
            )
          })}
        </div>
        <div
          className={styles.errorMessage}
          style={{ display: `${showErrorMessage ? 'block' : 'none'}` }}
        >
          Please select a size
        </div>
        <div className={styles.addToCartBtn} onClick={() => handleAddToCart()}>
          Add to Cart
        </div>
      </div>
    </div>
  )
}

export default Content
