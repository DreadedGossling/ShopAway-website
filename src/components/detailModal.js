import React from 'react';
import '../styles/detailModal.css'

const Modal = ({ onClose, detail }) => {

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div className="detail-info" >
          <div className="img-card">
            <img src={detail.thumbnail} alt={detail.title} />
          </div>
          <div className="product-detail">
            <h2 className="modal-title">{detail.title}</h2>
            <h3 className="modal-price">£ {detail.price}</h3>
            <p className="modal-desc">{detail.description}</p>
          </div>
        </div>
        <button style={styles.closeButton} onClick={onClose}>X</button>
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
    justifyContent: 'center'
  },
  modal: {
    background: "linear-gradient(#e66465, #9198e5)",
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    width: '80%',
    maxWidth: '500px'
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    color: 'green',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer'
  }
};

export default Modal;
