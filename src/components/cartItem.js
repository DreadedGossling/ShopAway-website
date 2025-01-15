import React from 'react'

const CartItem = ({ cartItem, removeFromCart, handleQuantity }) => {
  return (
    <>
      <ul>
        {cartItem && cartItem.map((item) => (
          <li key={item.id}
            className='flex justify-between items-center p-5 border-b-2 border-[#ddd]'>
            <img src={item.thumbnail} alt={item.name}
              className='w-36 h-36 rounded-full bg-cyan-100' />
            <div>
              <h3 className='text-center my-1 text-lime-700 font-extrabold text-lg'>{item.title}</h3>
              <p className='text-violet-700 font-mono font-bold'>Rs. {Math.floor(item.price * 80)}
                <span style={{ color: 'black', padding: '2px' }}> x </span>
                {item.quantity}
                <span style={{ color: 'black', padding: '2px' }}> = </span>
                <span className='text-violet-700 font-mono font-bold'>Rs. {Math.floor(item.price * 80) * item.quantity} /-</span>
              </p>
            </div>
            <div className='flex space-x-4'>
              <div className='mt-2'>
                <button
                  style={{ pointerEvents: item.quantity === 1 ? 'none' : '' }}
                  onClick={() => handleQuantity(item, -1)}
                  className='text-white px-2 h-6 bg-gray-400 hover:cursor-pointer hover:bg-gray-500'
                >-</button>
                <span className='m-2.5'>{item.quantity}</span>
                <button
                  onClick={() => handleQuantity(item, +1)}
                  className='text-white px-1.5 h-6 bg-gray-400  hover:cursor-pointer hover:bg-gray-500'
                >+</button>
              </div>
              <div className="text-right">
                <button
                  className='bg-[#ff69b4] text-white px-2.5 py-2 rounded-lg text-md cursor-pointer hover:bg-[#f053a1]'
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
