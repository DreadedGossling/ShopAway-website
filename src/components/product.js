import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import DetailModal from './detailModal';

const Product = (prop) => {
  const { product, cartItem, setCartItem, setAlert } = { ...prop }
  const item = { ...product, quantity: 1 }

  const [detail, setDetail] = useState({});
  const [showModal, setShowModal] = useState(false);

  const showDetails = (item) => {
    console.log("Product", item)
    setDetail(item);
    setShowModal(true);
  };

  let isAlready = false;

  const handleBuy = (item) => {
    cartItem.forEach((product) => {
      if (item.id === product.id) {
        isAlready = true
        setAlert(<Alert variant="filled" severity="warning">Item already exists in Cart</Alert>)
        setTimeout(() => {
          setAlert(null)
        }, 5000)

      }
    })
    if (isAlready) return
    setAlert(<Alert variant="filled" severity="success">Item added to Cart</Alert>)
    setTimeout(() => {
      setAlert(null)
    }, 5000)
    setCartItem([...cartItem, item])
    localStorage.setItem("cartItem", JSON.stringify([...cartItem, item]))
  }

  return (
    <>
      <div>
        <li key={item.title} className='product-card'>

          <div style={{ fontFamily: 'cursive' }}>
            <div className='image-container'>
              <img src={item.thumbnail}
                alt={item.thumbnail} width={175}
                className='product-image'
                loading='lazy' />
            </div>
            <hr />
            <h4 style={{ color: 'rgb(54, 54, 98)' }}>{item.title}</h4>
            <h3 style={{ color: 'rgb(54, 54, 98)' }}>
              <span style={{ fontSize: '16px' }}>Rs. </span>{Math.floor(item.price * 80)} /-
            </h3>
            <h5 className='product-description'>
              {item.description.substr(0, 150)}...
              <button
                onClick={() => showDetails(item)}
                style={{ backgroundColor: 'inherit', border: 'none', color: 'green', cursor: 'pointer' }}>
                Read More
              </button>
              {showModal && (
                <DetailModal
                  onClose={() => setShowModal(false)}
                  detail={detail} />
              )}
            </h5>
          </div>

          <button
            className={isAlready ? 'disabled-add-to-cart-button' : 'add-to-cart-button'}
            onClick={() => handleBuy(item)}>
            Buy
          </button>

        </li>
      </div>
    </>
  )
}

export default Product
