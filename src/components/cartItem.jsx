import React from 'react'

const CartItem = ({ cartItem, removeFromCart, handleQuantity }) => {
  return (
    <>
      <ul>
        {cartItem.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.name} />
            <div>
              <h3>{item.title}</h3>
              <p>Rs. {Math.floor(item.price * 80)}
                <span style={{ color: 'black', padding: '2px' }}>x</span>
                {item.quantity}
                <span style={{ color: 'black', padding: '2px' }}>=</span>
                Rs. {Math.floor(item.price * 80) * item.quantity} /-
              </p>
            </div>
            <div className='operational-buttons'>
              <div>
                <button
                  disabled={item.quantity <= 1}
                  onClick={() => handleQuantity(item, -1)}
                  className='quantity-button'
                >-</button>
                <span className='quantity'>{item.quantity}</span>
                <button
                  onClick={() => handleQuantity(item, +1)}
                  className='quantity-button'
                >+</button>
              </div>

              <div className="item-actions">
                <button
                  className='btn-remove'
                  onClick={() => removeFromCart(item.id)}
                >Remove</button>
              </div>

            </div>

          </li>
        ))}
      </ul>
    </>
  )
}

export default CartItem
