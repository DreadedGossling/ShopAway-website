import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import '../styles/product.css'

const Modal = ({ onClose, detail, handleBuy, cartItem }) => {

  const findItem = cartItem.find((item) => item.id === detail.id)

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.modal}>

          <img src={detail.thumbnail} alt={detail.title} />
          <div>
            <div style={styles.star}>
              {new Array(Math.round(detail.rating)).fill(0).map((_, i) => {
                return <div key={i} >&#9733; </div>
              })}
              <h5 style={styles.rate}>{detail.rating}</h5>
            </div>
            <h3>{detail.title}</h3>
            <h4>Rs. {Math.floor(detail.price * 80)} /-</h4>
            <p style={styles.description}>{detail.description}</p>

            <button
              className={findItem ? 'disabled-add-to-cart-button' : 'add-to-cart-button'}
              onClick={() => handleBuy(detail)}>
              Buy
            </button>
          </div>
       
        </div>
        <button style={styles.closeButton} onClick={onClose}>
          <IoCloseSharp />
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    background: "linear-gradient(white, lightcyan)",
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    width: '80%',
    maxWidth: '450px',
    height: 'fit-content'
  },
  star: {
    display: 'flex',
    fontSize: '25px',
    color: 'gold'
  },
  rate: {
    margin: '10px',
    color: 'green',
    fontSize: '12px'
  },
  description: {
    fontSize: '15px',

  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '10px',
    background: 'transparent',
    color: 'green',
    border: 'none',
    fontSize: '25px',
    cursor: 'pointer'
  }
};

export default Modal;
