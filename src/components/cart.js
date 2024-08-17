import React from 'react'
import '../styles/cart.css'
import CartItem from './cartItem'
import { Alert } from '@mui/material'

const Cart = (prop) => {
  const { cartItem, setCartItem, setAlert } = { ...prop }
  
  const removeFromCart = (productId) => {
    const newCart = cartItem.filter((item) => item.id !== productId)
    setAlert(<Alert variant="filled" severity="info">Item removed Successfully</Alert>)
    setTimeout(() => {
      setAlert(null)
    }, 5000)
    setCartItem(newCart);
    localStorage.setItem("cartItem", JSON.stringify(newCart));
  };

  const subtotal = () => {
    return cartItem.reduce((total, item) => total + Math.floor((item.price * 80) * item.quantity), 0);
  };

  const handleQuantity = (item, qty) => {
    let ind = -1;
    cartItem.forEach((product, index) => {
      if (product.id === item.id) {
        ind = index
      }
    });
    const tempArr = cartItem;

    if (tempArr[ind].quantity === 0) {
      tempArr[ind].quantity = 1;
    }
    tempArr[ind].quantity += qty;

    setCartItem([...tempArr])
    localStorage.setItem("cartItem", JSON.stringify([...tempArr]));
  }

  return (
    <>
      <div className="cart-page">
        <div className="cart-container">
          <h2>Shopping Cart</h2>
          <ul className="cart-list">
            {cartItem.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <CartItem
                cartItem={cartItem}
                removeFromCart={removeFromCart}
                handleQuantity={handleQuantity} />
            )}
          </ul>

          <div className="cart-summary">
            <h3 style={{ fontFamily: 'serif' }}>Subtotal: Rs.{subtotal().toFixed(2)} /-</h3>
            <button className="btn-checkout">Checkout</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default Cart
