import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import Cart from '../cart/Cart'
import cartDark from '../../assets/cart-dark.svg'
import cartLight from '../../assets/cart-light.svg'

const Header = ({ cartItems }) => {
  const [openCart, setOpenCart] = useState(false)
  const [totalItemCount, setTotalItemCount] = useState(0)
  const [mobileView, setMobileView] = useState(false)

  const handleWindowSizeChange = () => {
    if (window.innerWidth < 768) {
      setMobileView(true)
    } else {
      setMobileView(false)
    }
  }

  // call your useEffect
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const handleCartOpen = () => {
    setOpenCart(!openCart)
  }

  useEffect(() => {
    let total = 0
    cartItems.forEach(item => {
      total += item.quantity
    })
    setTotalItemCount(total)
  }, [cartItems])

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.right}>
          <div
            className={`${styles.cartBtn} ${openCart && styles.cartOpened}`}
            onClick={() => handleCartOpen()}
          >
            {mobileView && (
              <img
                className={styles.cartIcon}
                src={openCart ? cartDark : cartLight}
                alt='cart icon'
              />
            )}
            {!mobileView && 'My Cart'} ( {`${totalItemCount}`} )
          </div>
          <Cart cartItems={cartItems} openCart={openCart}></Cart>
        </div>
      </div>
    </nav>
  )
}

export default Header
