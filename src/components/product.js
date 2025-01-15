import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import DetailModal from './detailModal';

const Product = (prop) => {
  const { product, cartItem, setCartItem, setAlert, userData } = { ...prop }
  const item = { ...product, quantity: 1 }
  const [detail, setDetail] = useState({});
  const [showModal, setShowModal] = useState(false);

  const showDetails = (item) => {
    setDetail(item);
    setShowModal(true);
  };

  let isAlready = false;

  const handleBuy = (item) => {
    (cartItem || []).forEach((product) => {
      if (item.id === product.id) {
        isAlready = true
        setAlert(<Alert variant="filled" severity="warning">Item already exists in Cart</Alert>)
        setTimeout(() => {
          setAlert(null)
        }, 5000)
      }
    })

    if (isAlready) return;

    setAlert(<Alert variant="filled" severity="success">Item added to Cart</Alert>)
    setTimeout(() => {
      setAlert(null)
    }, 5000)

    const updatedCart = [...(cartItem || []), item];
    setCartItem(updatedCart);
    localStorage.setItem(userData.email, JSON.stringify(updatedCart));
    setShowModal(false);
  }

  return (
    <>
      <div>
        <li key={item.title}
          className='bg-gradient-to-b from-[#DEF4F9] to-[#F7EEF7]  border-1 border-gray-100 rounded-md shadow-md shadow-slate-400
        p-5 w-72 h-[460px] m-10 hover:from-[#F7EEF7] hover:to-[#DEF4F9] hover:shadow-xl hover:shadow-sky-400  ease-in-out duration-150'>

          <div style={{ fontFamily: 'cursive' }}>
            <div className='mb-2 flex justify-center'>
              <img src={item.thumbnail}
                alt={item.thumbnail} width={175}
                className='rounded-full'
                loading='lazy' />
            </div>
            <hr className='bg-slate-200' />
            <h2 className='text-center my-1 text-lime-700 font-extrabold text-lg'>{item.title}</h2>
            <h3 className='text-violet-700 font-mono font-bold'>
              Rs.{Math.floor(item.price * 80)} /-
            </h3>
            <h5 className='text-justify text-sm mt-2 h-16'>
              {item.description.substr(0, 100)}...

            </h5>
            <div className='flex justify-center'>
              <button
                onClick={() => showDetails(item)}
                className='bg-green-500 text-white w-20 h-10 rounded-md cursor-pointer font-medium mt-4 hover:bg-green-600'
              >
                View
              </button>
            </div>
          </div>

        </li>
      </div>

      {showModal && (
        <DetailModal
          onClose={() => setShowModal(false)}
          handleBuy={handleBuy}
          detail={detail}
        />
      )}
    </>
  )
}

export default Product
