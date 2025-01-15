import React from 'react'
import CartItem from './cartItem'

const Cart = (prop) => {
  const { cartItem, setCartItem, setAlert } = { ...prop }

  const removeFromCart = (productId) => {
    const newCart = cartItem.filter((item) => item.id !== productId)
    setAlert(
      <div className='bg-green-500 text-white p-3 mt-1 w-fill'>Item removed Successfully</div>
    )
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
      <div className="flex justify-center">
        <div className="w-[75%] mx-20 mt-36 mb-8 p-5  border-slate-400 border-1 shadow-md rounded-lg shadow-black bg-[#f9f9f9]">
          <h1 className='-mt-3 text-center text-2xl font-serif font-semibold text-emerald-800 border-t-2 border-b-2 border-slate-300 rounded-lg p-1.5 bg-gradient-to-b from-[#DEF4F9] to-[#F7EEF7]'>Cart</h1>
          <ul className="text-center">
            {cartItem && cartItem.length === 0 ? (
              <h3 className='text-red-800 mt-8'>Your cart is empty</h3>
            ) : (
              <CartItem
                cartItem={cartItem}
                removeFromCart={removeFromCart}
                handleQuantity={handleQuantity} />
            )}
          </ul>

          <div className="my-6 p-5 bg-[#f9f9f9] border-t-1 border-[#ddd] flex justify-between">
            {cartItem && cartItem.length > 0 ?
              <>
                <h3 className='text-black font-mono font-bold'>Subtotal:
                  <span className='text-red-700 text-xl'> Rs.{subtotal().toFixed(2)} /-</span>
                </h3>
                <button className=' bg-green-500 text-white w-44 h-10 rounded-md cursor-pointer font-medium hover:bg-green-600'>
                  Checkout
                </button>
              </>
              : ""
            }
          </div>
        </div>
      </div >
    </>
  )
}

export default Cart
